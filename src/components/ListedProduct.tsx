import LocationService from "~/services/Location.service";
import NumberFormatter from '~/services/NumberFormatter.service'
import Icon from "./Icon";
import { useRouter } from "next/router";
import { Listing } from "@prisma/client";
import moment from "moment";

export const ListedProduct = ({ listing, conversations }: { listing: Listing, conversations: any }) => {
    const router = useRouter();

    const openChat = () => {
        updateChatLocation(listing.id);
    }

    const updateChatLocation = (listingId: string) => {
        const locationService = new LocationService(router);
        locationService.updateQueryParam('listingId', listingId);
        locationService.removeQueryParam('conversationId');
    }

    const getCardClassName = () => {
        return listing.id == router?.query?.listingId ? 'active' : '';
    }

    return (
        <div className={`product-card mb-4 ${getCardClassName()}`} onClick={openChat}>
            <div className="messages-notification-wrapper">
                {conversations?.length || 0}
            </div>
            <ProductHeader listing={listing} />
            <ProductDescription description={listing.description} />
        </div>
    );
}

const ProductHeader = ({ listing }: { listing: Listing }) => {
    return (
        <div className="card-header">
            <div className="left">
                <div className="category-wrapper">
                    <Icon icon='saas_icon' />
                </div>
                <div className="product-name">
                    <div className="title">
                        {listing.name}
                    </div>
                    <span className="created-at">Listed {moment(listing.createdAt).fromNow()}</span>
                </div>
            </div>
            <div className="right gap-2">
                <ProductPrice price={listing.price} />
                <ProductSaves likeCount={listing?.likeCount} />
            </div>
        </div>
    );
}

const ProductPrice = ({ price }: { price: number }) => {
    const formattedNumber = NumberFormatter.formatNumber(price);

    return (
        <div className="d-block">
            <div className="label" style={{ marginTop: 0 }}>ASKING PRICE</div>
            <span className="value">${formattedNumber}</span>
        </div>
    );
}

const ProductSaves = ({ likeCount }: { likeCount: number }) => {
    const formattedNumber = NumberFormatter.formatNumber(likeCount);

    return (
        <div className="d-block" style={{ height: '62.5px' }}>
            <div className="label" style={{ marginBottom: '8px', marginTop: '11px' }}>SAVES</div>
            <div className="d-flex" style={{ alignItems: 'center', columnGap: '4px' }}>
                <Icon icon='wishlist' size='xs' />
                <span className="value">{formattedNumber}</span>
            </div>
        </div>
    );
}

const ProductDescription = ({ description }: { description: string }) => {
    return (
        <div className="description" style={{ margin: 0 }}>
            <p>{description}</p>
        </div>
    );
}

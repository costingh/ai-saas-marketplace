import { type Listing } from "@prisma/client";
import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { api } from "~/utils/api";
import Icon from "~/components/Icon";
import MakeOfferModal from "~/components/MakeOfferModal";
import { useEffect, useState } from "react";
import InvisibleNavbar from "~/components/InvisibleNavbar";
import moment from 'moment';
import { useUser } from "@clerk/nextjs";
import { NavBar } from "~/components/NavBar";

function Card({ listing, setProductDetails }: { listing: Listing, setProductDetails: any }) {
    const openMakeOfferModal = (e: any, productDetails: any) => {
        setProductDetails(productDetails)
        document.getElementById('make-offer-modal')?.classList.add('show')
    }

    const [isLiked, setIsLiked] = useState(listing?.isLikedByUser || false)
    const [likeCount, setLikeCount] = useState(listing?.likeCount ?? 0)

    const data = useUser();

    const sendLike = api.listings.sendLike.useMutation();
    const unlike = api.listings.unlike.useMutation();

    const addListingToWishList = (listingId: string) => {
        if (!isLiked) {
            setIsLiked(true)
            setLikeCount((prevLikeCount) => prevLikeCount + 1);

            sendLike
                .mutateAsync({listingId: listingId, })
                .then(() => {});
        } else {
            setLikeCount((prevLikeCount) => prevLikeCount - 1);
            setIsLiked(false)

            unlike
                .mutateAsync({listingId: listingId, })
                .then(() => {});
        }
    }

    return (
        <div className="product-card">
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
                <div className="right">
                    <div className="wishList">
                        <div className="icon-wrapper" onClick={() => addListingToWishList(listing.id)}>
                            <Icon icon={isLiked ? 'wishlist_red' : 'wishlist'} />
                        </div>
                    </div>
                    <div className="icon-wrapper">
                        <Icon icon='notifications_on' />
                    </div>
                </div>
            </div>

            <div className="description">
                <p>{listing.description}</p>
            </div>

            <div className="card-footer">
                <div className="left">
                    <div className="d-block">
                        <div className="label">ASKING PRICE</div>
                        <span className="value">${listing.price}</span>
                    </div>

                    {/* <div className="d-block" style={{ height: '62.5px' }}>
                        <div className="label" style={{ marginBottom: '8px' }}>OFFERS</div>
                        <div className="d-flex" style={{ alignItems: 'center', columnGap: '4px' }}>
                            <svg width='16' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.5393 19.0413C20.3893 19.1913 20.1993 19.2613 20.0093 19.2613C19.8193 19.2613 19.6293 19.1913 19.4793 19.0413L14.5293 14.0913L15.0593 13.5613L15.5893 13.0312L20.5393 17.9812C20.8293 18.2712 20.8293 18.7513 20.5393 19.0413Z" fill="#111"></path> <path d="M6.46937 9.27814L12.2694 15.0781C12.6594 15.4681 12.6594 16.0981 12.2694 16.4881L11.3694 17.3981C10.5594 18.1981 9.27938 18.1981 8.47937 17.3981L4.13938 13.0581C3.34938 12.2681 3.34938 10.9781 4.13938 10.1781L5.04938 9.26814C5.43938 8.88814 6.07937 8.88814 6.46937 9.27814Z" fill="#111"></path> <path d="M18.5898 10.1897L14.7798 13.9897C14.3798 14.3897 13.7398 14.3897 13.3398 13.9897L7.55977 8.20969C7.15977 7.80969 7.15977 7.16969 7.55977 6.76969L11.3698 2.95969C12.1598 2.16969 13.4498 2.16969 14.2498 2.95969L18.5898 7.29969C19.3798 8.09969 19.3798 9.37969 18.5898 10.1897Z" fill="#111"></path> <path d="M8 21.75H2C1.59 21.75 1.25 21.41 1.25 21C1.25 20.59 1.59 20.25 2 20.25H8C8.41 20.25 8.75 20.59 8.75 21C8.75 21.41 8.41 21.75 8 21.75Z" fill="#111"></path> </g></svg>
                            <span className="value">44</span>
                        </div>
                    </div> */}

                    <div className="d-block" style={{ height: '62.5px' }}>
                        <div className="label" style={{ marginBottom: '8px' }}>SAVES</div>
                        <div className="d-flex" style={{ alignItems: 'center', columnGap: '4px' }}>
                            <Icon icon='wishlist' />
                            <span className="value">{likeCount}</span>
                        </div>
                    </div>

                </div>
                <div className="right">
                    <button className="make-offer btn-outline" onClick={(e) => openMakeOfferModal(e, listing)}>Make offer now</button>
                    <Link
                        href={`/listings/${listing.id}`}
                        className="btn-filled"
                    >
                        View
                        <Icon icon='arrow_right' />
                    </Link>
                </div>
            </div>




        </div>
    );
}

const Browse: NextPage = () => {
    const listings = api.listings.list.useQuery();

    console.log(listings?.data)

    const [productDetails, setProductDetails] = useState('')

    return (
        <>
            <Head>
                <title>Browse</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar/>
            <div style={{ width: '100%' }}>
                <InvisibleNavbar />
                <main className="container mx-auto flex min-h-screen flex-col overflow-y" >

                    <h1 className="listing-section-header">All listings</h1>
                    <div style={{position: 'relative'}}>
                    <div className="container products-horizontal-scroll-wrapper">
                        {listings?.data?.map((listing) => (
                            <Card key={listing.id} listing={listing} setProductDetails={setProductDetails} />
                        ))}

                    </div>
                        <div className="faded"></div>
                    </div>

                    <MakeOfferModal productDetails={productDetails} setProductDetails={setProductDetails} />
                </main>
            </div>
        </>
    );
};

export default Browse;

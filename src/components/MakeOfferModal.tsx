import { useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { api } from "~/utils/api";
import { useForm } from "react-hook-form";
import Icon from "~/components/Icon";
import { useState } from "react";

function MakeOfferModal({ productDetails, setProductDetails }: { productDetails: any, setProductDetails: any }) {
    const router = useRouter();
    const { register, handleSubmit, reset , watch} = useForm<{ message: string }>();
    const [loading, setLoading] = useState(false);

    // const listing = api.listings.get.useQuery(
    //     {
    //         listingId: listingId as string,
    //     },
    //     {
    //         enabled: !!listingId,
    //     }
    // );
    const user = useUser();

    const sendMessage = api.listings.sendMessage.useMutation();

    // const listingItem = listing.data;

    // if (!listingItem) {
    //     return null;
    // }

    const handleClose = (e: any) => {
        try {
            if (e?.target?.id != 'make-offer-modal') return;
            document.getElementById('make-offer-modal')?.classList.remove('show')
            setProductDetails(null)
        } catch (err) {
            console.error('Could not close the modal')
        }
    }

    const handleCloseModal = (e: any) => {
        try {
            document.getElementById('make-offer-modal')?.classList.remove('show')
            setProductDetails(null)
        } catch (err) {
            console.error('Could not close the modal')
        }
    }

    return (
        <div id="make-offer-modal" className="modal" onClick={(e) => handleClose(e)}>
            <div className="inner">
                <div className="flex justify-between" style={{ alignItems: 'center' }}>
                    <h1 className="listing-modal-title">{productDetails?.name ?? '-'}</h1>
                    <div onClick={handleCloseModal} style={{ cursor: 'pointer' }}>
                        <Icon icon="close" />
                    </div>
                </div>
                <p className="listing-modal-description">{productDetails?.description ?? '-'}</p>
                <p className="listing-modal-price">This product is listed for <span>$ {productDetails?.price ?? '-'}</span></p>

                {user.isSignedIn && (
                    <form
                        className="flex flex-col gap-4"
                        onSubmit={handleSubmit((formData) => {
                            setLoading(true)
                            if (formData.message.trim() === '') {
                                return; 
                            }
                            sendMessage
                                .mutateAsync({
                                    message: formData.message,
                                    listingId: productDetails?.id
                                })
                                .then(() => {
                                    reset();
                                    setLoading(false)
                                });
                        })}
                    >
                        <div>
                            <label
                                htmlFor="name"
                                className="message-label"
                            >
                                Message
                            </label>
                            <textarea
                                id="name"
                                className="textarea"
                                placeholder="Write here your offer or proposal"
                                {...register("message", { required: true })}
                            />
                        </div>
                        <button className={`send-message-button btn-filled ${(loading || watch('message') == '' )? 'disabled' : ''}`}>
                            {!loading ? <span>Send Message</span> : <div className="spinner"></div>}
                        </button>
                    </form>
                )}
            </div>
        </div>
    )
}

export default MakeOfferModal
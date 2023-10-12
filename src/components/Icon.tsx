import React from 'react'

function Icon({ icon }: { icon: string }) {
    return (
        <>
            {icon == 'notifications_on' && <svg height='24' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13.7143 17.25C13.7143 18.2165 12.9468 19 12 19C11.0532 19 10.2857 18.2165 10.2857 17.25M12 5V5C9.51472 5 7.5 7.01472 7.5 9.5V10.8079C7.5 11.5944 7.34024 12.3728 7.0304 13.0957L6.59739 14.1061C6.31459 14.7659 6.79862 15.5 7.51654 15.5H16.4835C17.2014 15.5 17.6854 14.7659 17.4026 14.1061L16.9696 13.0957C16.6598 12.3728 16.5 11.5944 16.5 10.8079V9.5C16.5 7.01472 14.4853 5 12 5V5ZM12 5V4" stroke="#464455" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>}
            {icon == 'notifications_off' && <svg height='24' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.5937 9.59375V10.7891C16.5937 11.5877 16.7589 12.3777 17.0791 13.1094L17.5887 14.2743C17.8416 14.8524 17.4181 15.5 16.787 15.5H10.6875M11.9999 5C9.46287 5 7.40618 7.05669 7.40618 9.59375V10.7891C7.40618 11.5877 7.24093 12.3777 6.92081 13.1094L6.41118 14.2743C6.15826 14.8524 6.58181 15.5 7.21282 15.5H8.5M11.9999 5C13.8925 5 15.5177 6.14445 16.2213 7.77902M11.9999 5V4M19 5L5 19M13.75 17.25C13.75 18.2165 12.9665 19 12 19C11.0335 19 10.25 18.2165 10.25 17.25" stroke="#464455" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>}
            {icon == 'saas_icon' && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.31853 15.9789C5.1603 15.9789 4.04951 15.5188 3.23051 14.6998C2.41152 13.8808 1.95142 12.77 1.95142 11.6118C1.95142 10.4536 2.41152 9.34277 3.23051 8.52378C4.04951 7.70479 5.1603 7.24468 6.31853 7.24468C6.31628 5.76365 6.89327 4.34045 7.92624 3.27912C8.95921 2.21778 10.3663 1.60246 11.8468 1.5646C13.3274 1.52674 14.764 2.06934 15.8499 3.07649C16.9357 4.08365 17.5847 5.47549 17.6582 6.95471C18.2496 7.15664 18.7486 7.56461 19.064 8.10407C19.3794 8.64353 19.4902 9.27848 19.3762 9.8929C20.1425 9.99713 20.8409 10.3879 21.3305 10.9866C21.8201 11.5852 22.0647 12.3472 22.0148 13.119C21.965 13.8908 21.6245 14.615 21.0619 15.1457C20.4993 15.6764 19.7565 15.9741 18.9831 15.9789H17.673" stroke="#3E50F7" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.1743 7.53125L12.1743 19.7141C12.1771 19.8454 12.1533 19.9758 12.1044 20.0976C12.0554 20.2194 11.9823 20.33 11.8895 20.4228C11.7967 20.5157 11.6861 20.5887 11.5643 20.6377C11.4425 20.6866 11.312 20.7104 11.1808 20.7077H7.70338" stroke="#3E50F7" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.645 20.5748H14.1612" stroke="#3E50F7" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.0081 7.18511C12.5989 7.18511 13.0778 6.70621 13.0778 6.11545C13.0778 5.52468 12.5989 5.04578 12.0081 5.04578C11.4174 5.04578 10.9385 5.52468 10.9385 6.11545C10.9385 6.70621 11.4174 7.18511 12.0081 7.18511Z" stroke="#3E50F7" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.1522 12.1237C15.743 12.1237 16.2219 11.6448 16.2219 11.054C16.2219 10.4633 15.743 9.98438 15.1522 9.98438C14.5614 9.98438 14.0825 10.4633 14.0825 11.054C14.0825 11.6448 14.5614 12.1237 15.1522 12.1237Z" stroke="#3E50F7" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.19303 21.627C5.60226 21.627 5.12336 21.1481 5.12336 20.5573C5.12336 19.9666 5.60226 19.4877 6.19303 19.4877C6.78379 19.4877 7.2627 19.9666 7.2627 20.5573C7.2627 21.1481 6.78379 21.627 6.19303 21.627Z" stroke="#3E50F7" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.9782 21.627C17.3874 21.627 16.9085 21.1481 16.9085 20.5573C16.9085 19.9666 17.3874 19.4877 17.9782 19.4877C18.5689 19.4877 19.0479 19.9666 19.0479 20.5573C19.0479 21.1481 18.5689 21.627 17.9782 21.627Z" stroke="#3E50F7" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.9285 13.7716L8.92844 15.9766C8.92566 16.1078 8.94947 16.2383 8.99841 16.3601C9.04736 16.4819 9.12044 16.5925 9.21326 16.6853C9.30608 16.7781 9.41671 16.8512 9.53851 16.9002C9.66031 16.9491 9.79075 16.9729 9.92199 16.9701L11.7748 16.9702" stroke="#3E50F7" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.118 12.4991V15.9766C15.1208 16.1078 15.097 16.2382 15.0481 16.36C14.9991 16.4818 14.926 16.5925 14.8332 16.6853C14.7404 16.7781 14.6298 16.8512 14.508 16.9001C14.3862 16.9491 14.2557 16.9729 14.1245 16.9701L12.3525 16.9702" stroke="#3E50F7" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.91774 12.668C9.74443 12.668 10.4146 11.9978 10.4146 11.1712C10.4146 10.3445 9.74443 9.67432 8.91774 9.67432C8.09106 9.67432 7.4209 10.3445 7.4209 11.1712C7.4209 11.9978 8.09106 12.668 8.91774 12.668Z" fill="#3E50F7"></path></svg>}
            {icon == 'go_back' && <svg width="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#3e50f7" fill-rule="evenodd" d="M4.297105,3.29289 L0.59,7 L4.297105,10.7071 C4.687635,11.0976 5.320795,11.0976 5.711315,10.7071 C6.101845,10.3166 6.101845,9.68342 5.711315,9.29289 L4.418425,8 L11.504215,8 C12.332615,8 13.004215,8.67157 13.004215,9.5 C13.004215,10.3284 12.332615,11 11.504215,11 L10.004215,11 C9.451935,11 9.004215,11.4477 9.004215,12 C9.004215,12.5523 9.451935,13 10.004215,13 L11.504215,13 C13.437215,13 15.004215,11.433 15.004215,9.5 C15.004215,7.567 13.437215,6 11.504215,6 L4.418425,6 L5.711315,4.70711 C6.101845,4.31658 6.101845,3.68342 5.711315,3.29289 C5.320795,2.90237 4.687635,2.90237 4.297105,3.29289 Z"></path> </g></svg>}
            {icon == 'location' && <svg width="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="style=linear"> <g id="location"> <path id="vector" d="M9.17891 20.3113C9.25802 20.3888 9.33618 20.4651 9.41324 20.54C9.432 20.5582 9.4507 20.5762 9.46932 20.594M9.17891 20.3113C6.44969 17.6366 2.58692 13.4269 3.69458 8.49C5.64705 -0.169998 18.3629 -0.159997 20.3054 8.5C21.4452 13.58 17.3222 17.88 14.5769 20.54C12.6034 22.4618 11.4373 22.4798 9.46932 20.594M9.17891 20.3113L9.46932 20.594" stroke="#000000" stroke-width="1.5"></path> <circle id="ellipse" cx="12" cy="9.5" r="2.5" stroke="#000000" stroke-width="1.5"></circle> </g> </g> </g></svg>}
            {icon == 'customers' && <svg width="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="9" cy="6" r="4" stroke="#3e50f7" stroke-width="1.5"></circle> <path d="M15 9C16.6569 9 18 7.65685 18 6C18 4.34315 16.6569 3 15 3" stroke="#3e50f7" stroke-width="1.5" stroke-linecap="round"></path> <path d="M5.88915 20.5843C6.82627 20.8504 7.88256 21 9 21C12.866 21 16 19.2091 16 17C16 14.7909 12.866 13 9 13C5.13401 13 2 14.7909 2 17C2 17.3453 2.07657 17.6804 2.22053 18" stroke="#3e50f7" stroke-width="1.5" stroke-linecap="round"></path> <path d="M18 14C19.7542 14.3847 21 15.3589 21 16.5C21 17.5293 19.9863 18.4229 18.5 18.8704" stroke="#3e50f7" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>}
            {icon == 'wishlist_red' && <svg style={{filter: 'invert(14%) sepia(61%) saturate(6024%) hue-rotate(357deg) brightness(99%) contrast(135%)', fill: '#111'}} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_2533_32831)">
                    <path
                        d="M13.7116 8.13313L8.20445 13.4099C8.09331 13.5164 7.91814 13.5168 7.80644 13.4109L2.45374 8.3363C1.18349 7.13204 1.12202 5.12875 2.31606 3.84889C3.55365 2.52234 5.64733 2.49483 6.91935 3.7884L8.06512 4.95359C8.13449 5.02415 8.24872 5.02253 8.31607 4.95004L9.34959 3.83764C10.5308 2.56631 12.5313 2.52956 13.7584 3.75664C14.9724 4.97064 14.9513 6.94534 13.7116 8.13313Z"
                        stroke="#464154" stroke-linejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_2533_32831">
                        <rect width="16" height="16" fill="white" />
                    </clipPath>
                </defs>
            </svg>}

            {icon == 'wishlist' && <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_2533_32831)">
                    <path
                        d="M13.7116 8.13313L8.20445 13.4099C8.09331 13.5164 7.91814 13.5168 7.80644 13.4109L2.45374 8.3363C1.18349 7.13204 1.12202 5.12875 2.31606 3.84889C3.55365 2.52234 5.64733 2.49483 6.91935 3.7884L8.06512 4.95359C8.13449 5.02415 8.24872 5.02253 8.31607 4.95004L9.34959 3.83764C10.5308 2.56631 12.5313 2.52956 13.7584 3.75664C14.9724 4.97064 14.9513 6.94534 13.7116 8.13313Z"
                        stroke="#464154" stroke-linejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_2533_32831">
                        <rect width="16" height="16" fill="white" />
                    </clipPath>
                </defs>
            </svg>}
            {icon == 'arrow_right' && <svg
                height='10'
                width='10'
                aria-hidden="true"
                className="-mr-1 ml-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                ></path>
            </svg>
            }

            {icon == 'sell' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 11L3 15.5C3 18.3284 3 19.7426 3.87868 20.6213C4.75736 21.5 6.17157 21.5 9 21.5H15C17.8284 21.5 19.2426 21.5 20.1213 20.6213C21 19.7426 21 18.3284 21 15.5V11" stroke="#141B34" stroke-width="1.5" />
                <path d="M15 17C14.3159 17.6072 13.2268 18 12 18C10.7732 18 9.68409 17.6072 9 17" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" />
                <path d="M7.97071 9L8.6952 8.80605C8.59787 8.44245 8.2461 8.20732 7.87291 8.2564C7.49971 8.30549 7.22071 8.62359 7.22071 9H7.97071ZM2.11347 10.0405L2.8163 9.77865L2.8163 9.77865L2.11347 10.0405ZM21.8865 10.0405L21.1837 9.77865L21.1837 9.77866L21.8865 10.0405ZM16.0293 9H16.7793C16.7793 8.62359 16.5003 8.30549 16.1271 8.2564C15.7539 8.20732 15.4021 8.44245 15.3048 8.80605L16.0293 9ZM2.45767 8.0777L3.10768 8.45185L3.10768 8.45185L2.45767 8.0777ZM3.42134 6.40355L2.77133 6.02939H2.77133L3.42134 6.40355ZM21.5423 8.0777L20.8923 8.45185V8.45185L21.5423 8.0777ZM20.5787 6.40355L21.2287 6.02939V6.02939L20.5787 6.40355ZM21.9873 9.22893L21.2398 9.29116V9.29117L21.9873 9.22893ZM2.01274 9.22893L1.26533 9.16669L2.01274 9.22893ZM7.22071 9C7.22071 10.2375 6.20869 11.25 4.94875 11.25V12.75C7.02678 12.75 8.72071 11.0762 8.72071 9H7.22071ZM4.94875 11.25C3.96882 11.25 3.13568 10.6361 2.8163 9.77865L1.41065 10.3022C1.94354 11.7329 3.32767 12.75 4.94875 12.75V11.25ZM21.1837 9.77866C20.8643 10.6361 20.0312 11.25 19.0513 11.25V12.75C20.6723 12.75 22.0565 11.7329 22.5894 10.3022L21.1837 9.77866ZM19.0513 11.25C17.7913 11.25 16.7793 10.2375 16.7793 9H15.2793C15.2793 11.0762 16.9732 12.75 19.0513 12.75V11.25ZM12 11.25C10.3913 11.25 9.06678 10.1941 8.6952 8.80605L7.24623 9.19395C7.79833 11.2564 9.73155 12.75 12 12.75V11.25ZM15.3048 8.80605C14.9332 10.1941 13.6087 11.25 12 11.25V12.75C14.2685 12.75 16.2017 11.2564 16.7538 9.19395L15.3048 8.80605ZM3.10768 8.45185L4.07134 6.7777L2.77133 6.02939L1.80766 7.70355L3.10768 8.45185ZM22.1923 7.70355L21.2287 6.02939L19.9287 6.7777L20.8923 8.45185L22.1923 7.70355ZM5.91511 3.25H18.0849V1.75H5.91511V3.25ZM20.8086 4.45934C20.8086 2.95786 19.584 1.75 18.0849 1.75V3.25C18.7659 3.25 19.3086 3.79659 19.3086 4.45934H20.8086ZM21.2287 6.02939C20.9532 5.55089 20.8086 5.00972 20.8086 4.45934H19.3086C19.3086 5.27286 19.5224 6.072 19.9287 6.7777L21.2287 6.02939ZM4.69143 4.45934C4.69143 3.79659 5.23412 3.25 5.91511 3.25V1.75C4.41603 1.75 3.19143 2.95786 3.19143 4.45934H4.69143ZM22.5893 10.3023C22.6322 10.1872 22.6943 10.0269 22.726 9.82441C22.7576 9.62312 22.7553 9.41456 22.7347 9.16669L21.2398 9.29117C21.256 9.48553 21.2492 9.55963 21.2442 9.592C21.2393 9.62315 21.2325 9.64756 21.1837 9.77865L22.5893 10.3023ZM20.8923 8.45185C21.1674 8.92967 21.2185 9.03434 21.2398 9.29116L22.7347 9.16669C22.6824 8.53904 22.4614 8.17106 22.1923 7.70355L20.8923 8.45185ZM4.07134 6.7777C4.47755 6.072 4.69143 5.27286 4.69143 4.45934H3.19143C3.19143 5.00972 3.04676 5.55089 2.77133 6.02939L4.07134 6.7777ZM2.8163 9.77865C2.76747 9.64756 2.76074 9.62315 2.75585 9.592C2.75078 9.55963 2.74397 9.48552 2.76016 9.29116L1.26533 9.16669C1.24469 9.41457 1.2424 9.62312 1.27397 9.82441C1.30573 10.0269 1.36778 10.1872 1.41065 10.3022L2.8163 9.77865ZM1.80766 7.70355C1.53856 8.17106 1.31759 8.53904 1.26533 9.16669L2.76016 9.29116C2.78154 9.03434 2.83264 8.92967 3.10768 8.45185L1.80766 7.70355Z" fill="#141B34" />
            </svg>
            }
            {icon == 'lightning' && <svg width='24' height='24' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.4961 10.7088L9.8603 19.5885C9.6207 19.8349 9.22228 19.5503 9.37764 19.2437L12.4518 13.1779C12.553 12.9783 12.408 12.7423 12.1842 12.7423H5.71762C5.45129 12.7423 5.31702 12.4211 5.5041 12.2315L13.5132 4.11699C13.7455 3.88157 14.132 4.14034 14.0029 4.44487L11.706 9.86069C11.6215 10.06 11.7694 10.2805 11.9859 10.2778L18.2773 10.1997C18.5444 10.1964 18.6823 10.5174 18.4961 10.7088Z" stroke="#111"></path> </g></svg>}
            {icon == 'home' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 17C14.2005 17.6224 13.1502 18 12 18C10.8498 18 9.79952 17.6224 9 17" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" />
                <path d="M2.35139 13.2135C1.99837 10.9162 1.82186 9.76763 2.25617 8.74938C2.69047 7.73112 3.65403 7.03443 5.58114 5.64106L7.02099 4.6C9.41829 2.86667 10.6169 2 12 2C13.3831 2 14.5817 2.86667 16.979 4.6L18.4189 5.64106C20.346 7.03443 21.3095 7.73112 21.7438 8.74938C22.1781 9.76763 22.0016 10.9162 21.6486 13.2135L21.3476 15.1724C20.8471 18.4289 20.5969 20.0572 19.429 21.0286C18.2611 22 16.5537 22 13.1388 22H10.8612C7.44633 22 5.73891 22 4.571 21.0286C3.40309 20.0572 3.15287 18.4289 2.65243 15.1724L2.35139 13.2135Z" stroke="#141B34" stroke-width="1.5" stroke-linejoin="round" />
            </svg>}

            {icon == 'browse' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#141B34" stroke-width="1.5" />
                <path d="M16.4697 17.5303C16.7626 17.8232 17.2374 17.8232 17.5303 17.5303C17.8232 17.2374 17.8232 16.7626 17.5303 16.4697L16.4697 17.5303ZM14.4697 15.5303L16.4697 17.5303L17.5303 16.4697L15.5303 14.4697L14.4697 15.5303ZM16.75 11.5C16.75 8.6005 14.3995 6.25 11.5 6.25V7.75C13.5711 7.75 15.25 9.42893 15.25 11.5H16.75ZM11.5 6.25C8.6005 6.25 6.25 8.6005 6.25 11.5H7.75C7.75 9.42893 9.42893 7.75 11.5 7.75V6.25ZM6.25 11.5C6.25 14.3995 8.6005 16.75 11.5 16.75V15.25C9.42893 15.25 7.75 13.5711 7.75 11.5H6.25ZM11.5 16.75C14.3995 16.75 16.75 14.3995 16.75 11.5H15.25C15.25 13.5711 13.5711 15.25 11.5 15.25V16.75Z" fill="#141B34" />
            </svg>
            }
            {icon == 'inbox' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M21.5 13.5H16.5743C15.7322 13.5 15.0706 14.2036 14.6995 14.9472C14.2963 15.7551 13.4889 16.5 12 16.5C10.5111 16.5 9.70373 15.7551 9.30054 14.9472C8.92942 14.2036 8.26777 13.5 7.42566 13.5H2.5" stroke="#141B34" stroke-width="1.5" stroke-linejoin="round" />
            </svg>
            }
            {icon == 'bookmark' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 17.9808V9.70753C4 6.07416 4 4.25748 5.17157 3.12874C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.12874C20 4.25748 20 6.07416 20 9.70753V17.9808C20 20.2867 20 21.4396 19.2272 21.8523C17.7305 22.6514 14.9232 19.9852 13.59 19.1824C12.8168 18.7168 12.4302 18.484 12 18.484C11.5698 18.484 11.1832 18.7168 10.41 19.1824C9.0768 19.9852 6.26947 22.6514 4.77285 21.8523C4 21.4396 4 20.2867 4 17.9808Z" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            }
            {icon == 'calendar' && <svg width='16' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C20.1752 21.4816 19.3001 21.7706 18 21.8985" stroke="#3e50f7" stroke-width="1.5" stroke-linecap="round"></path> <path d="M7 4V2.5" stroke="#3e50f7" stroke-width="1.5" stroke-linecap="round"></path> <path d="M17 4V2.5" stroke="#3e50f7" stroke-width="1.5" stroke-linecap="round"></path> <path d="M21.5 9H16.625H10.75M2 9H5.875" stroke="#3e50f7" stroke-width="1.5" stroke-linecap="round"></path> <path d="M18 17C18 17.5523 17.5523 18 17 18C16.4477 18 16 17.5523 16 17C16 16.4477 16.4477 16 17 16C17.5523 16 18 16.4477 18 17Z" fill="#3e50f7"></path> <path d="M18 13C18 13.5523 17.5523 14 17 14C16.4477 14 16 13.5523 16 13C16 12.4477 16.4477 12 17 12C17.5523 12 18 12.4477 18 13Z" fill="#3e50f7"></path> <path d="M13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17Z" fill="#3e50f7"></path> <path d="M13 13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13C11 12.4477 11.4477 12 12 12C12.5523 12 13 12.4477 13 13Z" fill="#3e50f7"></path> <path d="M8 17C8 17.5523 7.55228 18 7 18C6.44772 18 6 17.5523 6 17C6 16.4477 6.44772 16 7 16C7.55228 16 8 16.4477 8 17Z" fill="#3e50f7"></path> <path d="M8 13C8 13.5523 7.55228 14 7 14C6.44772 14 6 13.5523 6 13C6 12.4477 6.44772 12 7 12C7.55228 12 8 12.4477 8 13Z" fill="#3e50f7"></path> </g></svg>}
            {icon == 'revenue' && <svg width='16' fill="#3e50f7" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M136.948 908.811c5.657 0 10.24-4.583 10.24-10.24V610.755c0-5.657-4.583-10.24-10.24-10.24h-81.92a10.238 10.238 0 00-10.24 10.24v287.816c0 5.657 4.583 10.24 10.24 10.24h81.92zm0 40.96h-81.92c-28.278 0-51.2-22.922-51.2-51.2V610.755c0-28.278 22.922-51.2 51.2-51.2h81.92c28.278 0 51.2 22.922 51.2 51.2v287.816c0 28.278-22.922 51.2-51.2 51.2zm278.414-40.96c5.657 0 10.24-4.583 10.24-10.24V551.322c0-5.657-4.583-10.24-10.24-10.24h-81.92a10.238 10.238 0 00-10.24 10.24v347.249c0 5.657 4.583 10.24 10.24 10.24h81.92zm0 40.96h-81.92c-28.278 0-51.2-22.922-51.2-51.2V551.322c0-28.278 22.922-51.2 51.2-51.2h81.92c28.278 0 51.2 22.922 51.2 51.2v347.249c0 28.278-22.922 51.2-51.2 51.2zm278.414-40.342c5.657 0 10.24-4.583 10.24-10.24V492.497c0-5.651-4.588-10.24-10.24-10.24h-81.92c-5.652 0-10.24 4.589-10.24 10.24v406.692c0 5.657 4.583 10.24 10.24 10.24h81.92zm0 40.96h-81.92c-28.278 0-51.2-22.922-51.2-51.2V492.497c0-28.271 22.924-51.2 51.2-51.2h81.92c28.276 0 51.2 22.929 51.2 51.2v406.692c0 28.278-22.922 51.2-51.2 51.2zm278.414-40.958c5.657 0 10.24-4.583 10.24-10.24V441.299c0-5.657-4.583-10.24-10.24-10.24h-81.92a10.238 10.238 0 00-10.24 10.24v457.892c0 5.657 4.583 10.24 10.24 10.24h81.92zm0 40.96h-81.92c-28.278 0-51.2-22.922-51.2-51.2V441.299c0-28.278 22.922-51.2 51.2-51.2h81.92c28.278 0 51.2 22.922 51.2 51.2v457.892c0 28.278-22.922 51.2-51.2 51.2zm-6.205-841.902C677.379 271.088 355.268 367.011 19.245 387.336c-11.29.683-19.889 10.389-19.206 21.679s10.389 19.889 21.679 19.206c342.256-20.702 670.39-118.419 964.372-284.046 9.854-5.552 13.342-18.041 7.79-27.896s-18.041-13.342-27.896-7.79z"></path><path d="M901.21 112.64l102.39.154c11.311.017 20.494-9.138 20.511-20.449s-9.138-20.494-20.449-20.511l-102.39-.154c-11.311-.017-20.494 9.138-20.511 20.449s9.138 20.494 20.449 20.511z"></path><path d="M983.151 92.251l-.307 101.827c-.034 11.311 9.107 20.508 20.418 20.542s20.508-9.107 20.542-20.418l.307-101.827c.034-11.311-9.107-20.508-20.418-20.542s-20.508 9.107-20.542 20.418z"></path></g></svg>}
            {icon == 'cash' && <svg width='16' fill="#3e50f7" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 457.223 457.223" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M453.473,209.361L143.917,30.638c-2.32-1.34-5.18-1.34-7.5,0L3.768,107.223c-2.32,1.339-3.75,3.815-3.75,6.494L0,241.367 c0,2.68,1.429,5.156,3.75,6.496l309.556,178.722c1.16,0.67,2.455,1.005,3.75,1.005s2.589-0.335,3.749-1.004l132.667-76.573 c2.321-1.339,3.751-3.816,3.751-6.496V215.856C457.223,213.176,455.793,210.7,453.473,209.361z M110.742,292.314l-95.741-55.276 l0.001-8.228l95.74,55.284V292.314z M110.742,266.774L15.004,211.49l0.001-8.198l95.737,55.283V266.774z M110.742,241.254 l-95.734-55.281l0.001-8.208l95.733,55.281V241.254z M110.742,215.724l-95.731-55.279l0.001-8.209l95.73,55.279V215.724z M110.742,190.193l-95.728-55.277l0.001-8.208l95.727,55.274V190.193z M22.517,113.719l117.65-67.926l95.526,55.152 l-117.969,67.748L22.517,113.719z M199.003,343.272l-73.261-42.297V190.644l73.261,42.302V343.272z M132.744,177.366 l117.969-67.749l73.334,42.34l-118.88,67.228L132.744,177.366z M309.556,407.1l-95.553-55.168v-8.215l95.553,55.18V407.1z M309.556,381.575l-95.553-55.18v-8.2l95.553,55.171V381.575z M309.556,356.046l-95.553-55.171v-8.209l95.553,55.171V356.046z M309.556,330.516l-95.553-55.171v-8.21l95.553,55.171V330.516z M309.556,304.986l-95.553-55.171v-8.208l95.553,55.174V304.986z M317.056,283.791l-96.812-55.901l118.881-67.228l95.598,55.193L317.056,283.791z M442.223,339.186l-117.667,67.915v-8.208 l117.667-67.938V339.186z M442.223,313.635l-117.667,67.938v-8.21l117.667-67.938V313.635z M442.223,288.104l-117.667,67.938 v-8.209l117.667-67.929V288.104z M442.223,262.584l-117.667,67.929v-8.21l117.667-67.929V262.584z M442.223,237.055 l-117.667,67.929v-8.202l117.667-67.935V237.055z"></path> <path d="M281.545,141.525c2.68-2.319,3.417-6.286,1.561-9.454c-2.095-3.575-6.689-4.774-10.263-2.68l-4.617,2.704 c-14.975-5.933-32.1-4.763-46.199,3.495l-0.157,0.091c-6.053,3.546-9.64,9.851-9.596,16.866c0.024,3.834,1.137,7.439,3.131,10.49 l-27.47,16.091c-0.929-1.06-1.06-2.292-1.062-2.873c-0.002-0.768,0.208-2.676,2.203-3.828c3.587-2.071,4.816-6.658,2.745-10.245 c-2.071-3.587-6.659-4.815-10.245-2.745c-6.096,3.52-9.723,9.824-9.702,16.863c0.011,3.857,1.123,7.482,3.126,10.549 c-2.712,2.314-3.467,6.303-1.602,9.487c1.396,2.383,3.903,3.71,6.478,3.71c1.288,0,2.593-0.332,3.784-1.03l4.668-2.734 c6.248,2.474,12.865,3.722,19.486,3.722c9.251,0,18.502-2.414,26.724-7.234l0.145-0.084c6.051-3.548,9.637-9.853,9.591-16.867 c-0.025-3.83-1.136-7.43-3.127-10.477l27.467-16.09c0.928,1.059,1.059,2.292,1.062,2.872c0.002,0.768-0.207,2.677-2.202,3.829 l-4.733,2.733c-3.587,2.071-4.816,6.658-2.745,10.245c2.072,3.588,6.661,4.816,10.245,2.745l4.733-2.733 c6.098-3.521,9.725-9.825,9.702-16.866C284.665,148.218,283.552,144.593,281.545,141.525z M227.274,152.452 c-0.005-0.765,0.198-2.668,2.171-3.825l0.157-0.092c5.953-3.487,12.659-5.2,19.361-5.157l-20.531,12.027 C227.429,154.33,227.278,153.048,227.274,152.452z M229.275,175.916c0.005,0.765-0.197,2.668-2.179,3.83l-0.145,0.084 c-5.954,3.49-12.659,5.206-19.358,5.167l20.531-12.027C229.122,174.044,229.271,175.321,229.275,175.916z"></path> </g> </g></svg>}
            {icon == 'recurring' && <svg width='16' viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#3e50f7"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>currency-revenue-solid</title> <g id="Layer_2" data-name="Layer 2"> <g id="invisible_box" data-name="invisible box"> <rect width="48" height="48" fill="none"></rect> </g> <g id="Q3_icons" data-name="Q3 icons"> <path d="M44,7.1V14a2,2,0,0,1-2,2H35a2,2,0,0,1-2-2.3A2.1,2.1,0,0,1,35.1,12h2.3A18,18,0,0,0,6.1,22.2a2,2,0,0,1-2,1.8h0a2,2,0,0,1-2-2.2A22,22,0,0,1,40,8.9V7a2,2,0,0,1,2.3-2A2.1,2.1,0,0,1,44,7.1Z"></path> <path d="M4,40.9V34a2,2,0,0,1,2-2h7a2,2,0,0,1,2,2.3A2.1,2.1,0,0,1,12.9,36H10.6A18,18,0,0,0,41.9,25.8a2,2,0,0,1,2-1.8h0a2,2,0,0,1,2,2.2A22,22,0,0,1,8,39.1V41a2,2,0,0,1-2.3,2A2.1,2.1,0,0,1,4,40.9Z"></path> <path d="M24.7,22c-3.5-.7-3.5-1.3-3.5-1.8s.2-.6.5-.9a3.4,3.4,0,0,1,1.8-.4,6.3,6.3,0,0,1,3.3.9,1.8,1.8,0,0,0,2.7-.5,1.9,1.9,0,0,0-.4-2.8A9.1,9.1,0,0,0,26,15.3V13a2,2,0,0,0-4,0v2.2c-3,.5-5,2.5-5,5.2s3.3,4.9,6.5,5.5,3.3,1.3,3.3,1.8-1.1,1.4-2.5,1.4h0a6.7,6.7,0,0,1-4.1-1.3,2,2,0,0,0-2.8.6,1.8,1.8,0,0,0,.3,2.6A10.9,10.9,0,0,0,22,32.8V35a2,2,0,0,0,4,0V32.8a6.3,6.3,0,0,0,3-1.3,4.9,4.9,0,0,0,2-4h0C31,23.8,27.6,22.6,24.7,22Z"></path> </g> </g> </g></svg>}
            {icon == 'percent' && <svg width='16' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#3e50f7"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6.5 10A3.78 3.78 0 0 1 3 6a3.78 3.78 0 0 1 3.5-4A3.78 3.78 0 0 1 10 6a3.734 3.734 0 0 1-3.5 4zm0-7A2.787 2.787 0 0 0 4 6a2.787 2.787 0 0 0 2.5 3A2.754 2.754 0 0 0 9 6a2.787 2.787 0 0 0-2.5-3zm11 19a3.78 3.78 0 0 1-3.5-4 3.78 3.78 0 0 1 3.5-4 3.78 3.78 0 0 1 3.5 4 3.734 3.734 0 0 1-3.5 4zm0-7a2.787 2.787 0 0 0-2.5 3 2.787 2.787 0 0 0 2.5 3 2.754 2.754 0 0 0 2.5-3 2.787 2.787 0 0 0-2.5-3zm1.168-12.226l-.836-.548-12.5 19 .836.548z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>}
            {icon == 'close' && <svg width='16' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Close_MD"> <path id="Vector" d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="#111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>}
            {icon == 'search' && <svg width='16' viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M7.30524 15.7137C6.4404 14.8306 5.85381 13.7131 5.61824 12.4997C5.38072 11.2829 5.50269 10.0233 5.96924 8.87469C6.43181 7.73253 7.22153 6.75251 8.23924 6.05769C10.3041 4.64744 13.0224 4.64744 15.0872 6.05769C16.105 6.75251 16.8947 7.73253 17.3572 8.87469C17.8238 10.0233 17.9458 11.2829 17.7082 12.4997C17.4727 13.7131 16.8861 14.8306 16.0212 15.7137C14.8759 16.889 13.3044 17.5519 11.6632 17.5519C10.0221 17.5519 8.45059 16.889 7.30524 15.7137V15.7137Z" stroke="#a5a4a8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11.6702 7.20292C11.2583 7.24656 10.9598 7.61586 11.0034 8.02777C11.0471 8.43968 11.4164 8.73821 11.8283 8.69457L11.6702 7.20292ZM13.5216 9.69213C13.6831 10.0736 14.1232 10.2519 14.5047 10.0904C14.8861 9.92892 15.0644 9.4888 14.9029 9.10736L13.5216 9.69213ZM16.6421 15.0869C16.349 14.7943 15.8741 14.7947 15.5815 15.0879C15.2888 15.381 15.2893 15.8559 15.5824 16.1485L16.6421 15.0869ZM18.9704 19.5305C19.2636 19.8232 19.7384 19.8228 20.0311 19.5296C20.3237 19.2364 20.3233 18.7616 20.0301 18.4689L18.9704 19.5305ZM11.8283 8.69457C12.5508 8.61801 13.2384 9.02306 13.5216 9.69213L14.9029 9.10736C14.3622 7.83005 13.0496 7.05676 11.6702 7.20292L11.8283 8.69457ZM15.5824 16.1485L18.9704 19.5305L20.0301 18.4689L16.6421 15.0869L15.5824 16.1485Z" fill="#a5a4a8"></path> </g></svg>}
            {icon == 'settings' && <svg width='18' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="3" stroke="#111" stroke-width="1.5"></circle> <path d="M3.66122 10.6392C4.13377 10.9361 4.43782 11.4419 4.43782 11.9999C4.43781 12.558 4.13376 13.0638 3.66122 13.3607C3.33966 13.5627 3.13248 13.7242 2.98508 13.9163C2.66217 14.3372 2.51966 14.869 2.5889 15.3949C2.64082 15.7893 2.87379 16.1928 3.33973 16.9999C3.80568 17.8069 4.03865 18.2104 4.35426 18.4526C4.77508 18.7755 5.30694 18.918 5.83284 18.8488C6.07287 18.8172 6.31628 18.7185 6.65196 18.5411C7.14544 18.2803 7.73558 18.2699 8.21895 18.549C8.70227 18.8281 8.98827 19.3443 9.00912 19.902C9.02332 20.2815 9.05958 20.5417 9.15224 20.7654C9.35523 21.2554 9.74458 21.6448 10.2346 21.8478C10.6022 22 11.0681 22 12 22C12.9319 22 13.3978 22 13.7654 21.8478C14.2554 21.6448 14.6448 21.2554 14.8478 20.7654C14.9404 20.5417 14.9767 20.2815 14.9909 19.9021C15.0117 19.3443 15.2977 18.8281 15.7811 18.549C16.2644 18.27 16.8545 18.2804 17.3479 18.5412C17.6837 18.7186 17.9271 18.8173 18.1671 18.8489C18.693 18.9182 19.2249 18.7756 19.6457 18.4527C19.9613 18.2106 20.1943 17.807 20.6603 17C20.8677 16.6407 21.029 16.3614 21.1486 16.1272M20.3387 13.3608C19.8662 13.0639 19.5622 12.5581 19.5621 12.0001C19.5621 11.442 19.8662 10.9361 20.3387 10.6392C20.6603 10.4372 20.8674 10.2757 21.0148 10.0836C21.3377 9.66278 21.4802 9.13092 21.411 8.60502C21.3591 8.2106 21.1261 7.80708 20.6601 7.00005C20.1942 6.19301 19.9612 5.7895 19.6456 5.54732C19.2248 5.22441 18.6929 5.0819 18.167 5.15113C17.927 5.18274 17.6836 5.2814 17.3479 5.45883C16.8544 5.71964 16.2643 5.73004 15.781 5.45096C15.2977 5.1719 15.0117 4.6557 14.9909 4.09803C14.9767 3.71852 14.9404 3.45835 14.8478 3.23463C14.6448 2.74458 14.2554 2.35523 13.7654 2.15224C13.3978 2 12.9319 2 12 2C11.0681 2 10.6022 2 10.2346 2.15224C9.74458 2.35523 9.35523 2.74458 9.15224 3.23463C9.05958 3.45833 9.02332 3.71848 9.00912 4.09794C8.98826 4.65566 8.70225 5.17191 8.21891 5.45096C7.73557 5.73002 7.14548 5.71959 6.65205 5.4588C6.31633 5.28136 6.0729 5.18269 5.83285 5.15108C5.30695 5.08185 4.77509 5.22436 4.35427 5.54727C4.03866 5.78945 3.80569 6.19297 3.33974 7C3.13231 7.35929 2.97105 7.63859 2.85138 7.87273" stroke="#111" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>}
            {icon == 'logout' && <svg width='18' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 12L2 12M2 12L5.5 9M2 12L5.5 15" stroke="#111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.3531 21.8897 19.1752 21.9862 17 21.9983M9.00195 17C9.01406 19.175 9.11051 20.3529 9.87889 21.1213C10.5202 21.7626 11.4467 21.9359 13 21.9827" stroke="#111" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>}
        </>
    )
}

export default Icon
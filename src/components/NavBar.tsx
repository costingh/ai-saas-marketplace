import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import Icon from "./Icon";
import { Tooltip } from 'react-tooltip'
import { useRouter } from "next/router";

export function NavBar() {
	const user = useUser();
	const router = useRouter();

	return (
		<div>
			<div className="navbar" style={{ position: 'relative', height: '100vh' }}>
				{/* <Link href="/" className="flex items-center">
					<span className="self-center whitespace-nowrap text-2xl font-semibold">
						MarketPlace
					</span>
				</Link> */}
				{/* <UserButton /> */}
				<div className="logo">
					<img src="./logo-saas.png" alt="" />
				</div>
				<div className="h-divider"></div>

				<Link
					href="/browse"
					aria-current="page"
					id="browse"
				>
					<div className={`navbar-icon-wrapper ${router.pathname == '/browse' && 'active'}`}>
						<Icon icon='browse' />
					</div>
				</Link>
				<Tooltip anchorSelect="#browse" clickable place="right" style={{ backgroundColor: '#222', color: '#eee', borderRadius: '15px', fontSize: '12px', padding: '4px 10px' }}>
					<button>Browse listings</button>
				</Tooltip>

				{user.isSignedIn && (
					<>
						<Link
							href="/deals"
							aria-current="page"
							id="deals"
						>
							<div className={`navbar-icon-wrapper ${router.pathname.includes('deals') && 'active'}`}>
								<Icon icon='inbox' />
							</div>
						</Link>
						<Tooltip anchorSelect="#deals" clickable place="right" style={{ backgroundColor: '#222', color: '#eee', borderRadius: '15px', fontSize: '12px', padding: '4px 10px' }}>
							<button>Show my deals</button>
						</Tooltip>

						<Link
							href="/sell-an-item"
							aria-current="page"
							id="sell"
						>
							<div className={`navbar-icon-wrapper ${router.pathname.includes('sell-an-item') && 'active'}`}>
								<Icon icon='sell' />
							</div>
						</Link>
						<Tooltip anchorSelect="#sell" clickable place="right" style={{ backgroundColor: '#222', color: '#eee', borderRadius: '15px', fontSize: '12px', padding: '4px 10px' }}>
							<button>List your application</button>
						</Tooltip>

					</>
				)}




				<div style={{ position: 'absolute', bottom: '20px', left: '56%', transform: 'translateX(-50%)' }}>
					<div className="navbar-icon-wrapper mb-2" id="upgrade">
						<Icon icon='lightning' />
					</div>
					<Tooltip anchorSelect="#upgrade" clickable place="right" style={{ backgroundColor: '#222', color: '#eee', borderRadius: '15px', fontSize: '12px', padding: '4px 10px' }}>
						<button>Upgrade to PRO</button>
					</Tooltip>

					<div className="navbar-icon-wrapper mb-2" id="settings">
						<Icon icon='settings' />
					</div>
					<Tooltip anchorSelect="#settings" clickable place="right" style={{ backgroundColor: '#222', color: '#eee', borderRadius: '15px', fontSize: '12px', padding: '4px 10px' }}>
						<button>Settings</button>
					</Tooltip>

					{/* <div className="navbar-icon-wrapper" id="logout">
						<Icon icon='logout' />
					</div>
					<Tooltip anchorSelect="#logout" clickable place="right" style={{ backgroundColor: '#222', color: '#eee', borderRadius: '15px', fontSize: '12px', padding: '4px 10px' }}>
						<button>Sign out</button>
					</Tooltip> */}

					<div className="h-divider mb-3"></div>

					<UserButton />
				</div>

				{/* {!user.isSignedIn && (
					<>
						<li>
							<SignInButton>
								<span className="btn-outline">
									Sign In
								</span>
							</SignInButton>
						</li>
						<button className="btn-filled ml-3">Sign up</button>
					</>
				)} */}
			</div>
		</div>
	);
}

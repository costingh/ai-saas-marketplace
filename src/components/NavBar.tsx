import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import Icon from "./Icon";
import { Tooltip } from 'react-tooltip'

export function NavBar() {
	const user = useUser();
	return (
		<div>

			{/* <nav className="border-gray-200 bg-white">
				<div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
					<Link href="/" className="flex items-center">
						<span className="self-center whitespace-nowrap text-2xl font-semibold">
							MarketPlace
						</span>
					</Link>
					<button
						data-collapse-toggle="navbar-default"
						type="button"
						className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
						aria-controls="navbar-default"
						aria-expanded="false"
					>
						<span className="sr-only">Open main menu</span>
						<svg
							className="h-6 w-6"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clipRule="evenodd"
							></path>
						</svg>
					</button>
					<div className="hidden w-full md:block md:w-auto" id="navbar-default">
						<ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
							<li>
								<Link
									href="/browse"
									className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500"
									aria-current="page"
								>
									Browse
								</Link>
							</li>
							{user.isSignedIn && (
								<>
									<li>
										<Link
											href="/offers"
											className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500"
											aria-current="page"
										>
											Offers
										</Link>
									</li>
									<li>
										<Link
											href="/sell-an-item"
											className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500"
											aria-current="page"
										>
											Sell an Item
										</Link>
									</li>
								</>
							)}
							{!user.isSignedIn && (
								<li>
									<SignInButton>
										<span className="cursor-pointer text-white hover:text-blue-500">
											Sign In
										</span>
									</SignInButton>
								</li>
							)}
							<li>
								<UserButton />
							</li>
						</ul>
					</div>
				</div>
			</nav> */}
			<div className="navbar" style={{ position: 'relative' }}>

				<Link href="/" className="flex items-center">
					<span className="self-center whitespace-nowrap text-2xl font-semibold">
						MarketPlace
					</span>
				</Link>
				<div className="right-actions">

					<Link
						href="/browse"
						className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500"
						aria-current="page"
						id="browse"
					>
						<div className="navbar-icon-wrapper">
							<Icon icon='home' />
						</div>
					</Link>
					<Tooltip anchorSelect="#browse" clickable>
						<button>Browse listings</button>
					</Tooltip>

					{user.isSignedIn && (
						<>
							<Link
								href="/offers"
								className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500"
								aria-current="page"
								id="offers"

							>
								<div className="navbar-icon-wrapper">
									<Icon icon='inbox' />
								</div>
							</Link>
							<Tooltip anchorSelect="#offers" clickable>
								<button>Show my offers</button>
							</Tooltip>

							<Link
								href="/sell-an-item"
								className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500"
								aria-current="page"
								id="sell"
							>
								<div className="navbar-icon-wrapper">
									<Icon icon='sell' />
								</div>
							</Link>
							<Tooltip anchorSelect="#sell" clickable>
								<button>Start selling</button>
							</Tooltip>

							<div className="navbar-icon-wrapper" id="upgrade">
								<Icon icon='lightning' />
							</div>
							<Tooltip anchorSelect="#upgrade" clickable>
								<button>Upgrade to PRO</button>
							</Tooltip>
						</>
					)}


					{!user.isSignedIn && (
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
					)}

					<div className="v-divider"></div>
					<UserButton />


				</div>
			</div>
		</div>
	);
}

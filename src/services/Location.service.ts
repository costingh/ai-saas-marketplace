import { NextRouter } from 'next/router';

interface QueryParams {
	[key: string]: string | string[] | undefined;
}

class LocationService {
	private router: NextRouter;

	constructor(router: NextRouter) {
		this.router = router;
	}

	public updateQueryParam(param: string, value: string): void {
		const currentPathname = this.router.pathname;
		const currentQuery = this.router.query;

		const newQuery = {
			...currentQuery,
			[param]: value,
		};

		this.navigateTo({
			pathname: currentPathname,
			query: newQuery,
		});
	}

	public removeQueryParam(param: string): void {
		const currentPathname = this.router.pathname;
		const currentQuery = { ...this.router.query };

		if (currentQuery[param]) {
			delete currentQuery[param];
			this.navigateTo({ pathname: currentPathname, query: currentQuery });
		}
	}

	public getQueryParams(): QueryParams {
		return this.router.query;
	}

	public getPathname(): string {
		return this.router.pathname;
	}

	private navigateTo(route: { pathname: string; query: QueryParams }): void {
		this.router.push(route, undefined, { shallow: true });
	}
}

export default LocationService;

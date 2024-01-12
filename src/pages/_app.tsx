import { type AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import 'react-tooltip/dist/react-tooltip.css'

const MyApp: AppType = ({ Component, pageProps }) => {
	return (
		<ClerkProvider {...pageProps}>
			<div style={{ display: 'flex', overflow: 'hidden' }}>
				<Component {...pageProps} />
			</div>
		</ClerkProvider>
	);
};

export default api.withTRPC(MyApp);

import React from 'react'
import Loader from './../components/body/Loader';

function withSuspense(Component) {
	return (props) => {
		<React.Suspense fallback={<Loader />}>
			<Component {...props} />
		</React.Suspense>
	}
}
export default withSuspense
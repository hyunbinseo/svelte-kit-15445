import { env as privateEnv } from '$env/dynamic/private';
import { env as publicEnv } from '$env/dynamic/public';
import { PRIVATE_STATIC_VAR } from '$env/static/private';
import { PUBLIC_STATIC_VAR } from '$env/static/public';

export const GET = () => {
	return Response.json({
		PRIVATE_DYNAMIC_VAR: privateEnv.PRIVATE_DYNAMIC_VAR,
		PRIVATE_STATIC_VAR,
		PUBLIC_DYNAMIC_VAR: publicEnv.PUBLIC_DYNAMIC_VAR,
		PUBLIC_STATIC_VAR
	});
};

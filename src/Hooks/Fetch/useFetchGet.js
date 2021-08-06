import { useCallback, useEffect, useState, useRef } from "react";

export function useFetchGet(url) {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(false);
	const [error, setError] = useState(null);

	const abortCount = useRef(new AbortController());
	const abortCountCurrent = abortCount.current;

	const getData = useCallback(() => {
		setIsPending(true);

		fetch(url, {
			signal: abortCountCurrent.signal,
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => {
				// Handling Errors From Server
				if (!response.ok) {
					throw Error("Could Not Fetch The Data For That Resource");
				}

				return response.json();
			})
			.then((data) => {
				setIsPending(false);
				setData(data);
				setError(null);
			})
			.catch((err) => {
				if (err.name !== "AbortError") {
					setIsPending(false);
					setError(err.message);
					setData(null);
				}
			});
	}, [url, abortCountCurrent]);

	useEffect(() => {
		getData();
		return () => abortCountCurrent.abort();
	}, [abortCountCurrent, getData]);

	return { getData, data, isPending, error };
}

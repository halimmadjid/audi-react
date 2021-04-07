import react,{ useState, useEffect} from 'react';
import { serverCalls } from '../api';

export function useGetData() {
    const [audiData, setData] = useState<any>([]);
    async function handleDataFetch(){
        const result = await serverCalls.get();
        setData(result)
    }

    useEffect(() => {
        handleDataFetch();
    }, [])
    return {audiData, getData:handleDataFetch}
}
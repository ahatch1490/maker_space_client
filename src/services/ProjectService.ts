// axios.ts

import type {AxiosInstance} from 'axios'
export function getProfileService() {
    return {
        fetchProfileSearch: async (search: string)=> {

            let response = await AxiosInstance.get('/api/search/profiles', {
                params:{search:search}});
            return response.data;
        },


}
}



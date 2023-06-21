import {createClient} from 'next-sanity'

const config = createClient({
    projectId: 'brnq4e56',
    dataset: 'production',
    apiVersion: '2023-06-21',
    useCdn: true
})

export default config
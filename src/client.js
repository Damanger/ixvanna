import { createClient } from '@sanity/client'

export default createClient({
    projectId: "tuai9hf1",
    dataset: "production",
    useCdn: true,
    apiVersion: '2021-03-25',
})
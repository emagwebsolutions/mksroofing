import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

const config = defineConfig({
    dataset: 'production',
    projectId: 'brnq4e56',
    title : 'MKS',
    apiVersion: '2023-06-17',
    plugins: [deskTool()],
    basePath: '/studio'
})

export default config
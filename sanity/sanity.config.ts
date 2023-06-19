import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import schemas from './schemas'


const config = defineConfig({
    dataset: 'production',
    projectId: 'brnq4e56',
    title : 'MKS',
    apiVersion: '2023-06-17',
    plugins: [deskTool()],
    basePath: '/dashboard',
    schema: {types: schemas}
})

export default config
export const swaggerDocument = {
    openapi: '3.0.1',
    info: {
        version: '1.0.0',
        title: 'Ng Service (unnamed as of yet)',
        description: 'Set of api endpoints used for service.'
    },
    servers: [
        {
            "url": "localhost:8001/{basePath}",
            "description": "The production API server",
            "variables": {
                "basePath": {
                    "default": "/api"
                }
            }
        }
    ],
}
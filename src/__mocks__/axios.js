const mockResponse={
    data: {
        results: [
            {
                name: {
                    first: "Birat",
                    last: "Bhattacharjee"
                },
                picture: {
                    large: "https://mockimage.com"
                },
                login:{
                    username: "TheMockUser"
                }
            }
        ]
    }
}

export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}
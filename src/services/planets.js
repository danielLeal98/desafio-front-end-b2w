import swapi from './configs/swapi'


export default {
    getPlanet(planetId) {
        const response = swapi.get(`/planets/${planetId}/`)
        return response
    }
}
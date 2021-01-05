function formatLocation(longitude, latitude) {
  const newLongitude = Number(longitude).toFixed(2)
  const newLatitude = Number(latitude).toFixed(2)
  return {
    longitude: newLongitude.toString().split('.'),
    latitude: newLatitude.toString().split('.'),
  }
}

export default formatLocation

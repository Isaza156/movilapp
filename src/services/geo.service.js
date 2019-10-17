function geo() {
	const mainUrl = "https://aka-geek.appspot.com";

	this.getGeoByUserId = async userId => {
		let response = await fetch(
			`${mainUrl}/api/geolocation/getbyuser/${userId}`
		);
		let data = await response.json();

		return data;
	};
}

export default new geo();

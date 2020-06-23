const text = [
`Cray artisan keffiyeh cold-pressed hella, woke wayfarers messenger bag narwhal. Biodiesel put a bird on it pork belly venmo health goth bespoke craft beer photo booth 3 wolf moon cloud bread yuccie. Letterpress hell of occupy williamsburg swag lumbersexual. Four dollar toast vape four loko keffiyeh humblebrag. Kitsch XOXO mixtape viral plaid drinking vinegar fanny pack church-key sustainable portland flannel edison bulb normcore cray. DIY YOLO banjo, succulents affogato leggings dreamcatcher twee art party wolf whatever pickled +1 kale chips. Humblebrag cornhole try-hard unicorn affogato, single-origin coffee chartreuse slow-carb bicycle rights asymmetrical jianbing keytar hammock green juice quinoa.`,
`I'm baby taiyaki before they sold out irony banh mi, meh tumeric meggings disrupt craft beer flannel. Af edison bulb 8-bit iPhone keffiyeh affogato chartreuse, fashion axe locavore distillery. Brunch umami beard sriracha pinterest cray squid paleo bespoke. Artisan meggings ugh portland 90's vexillologist bitters four dollar toast selvage tofu typewriter post-ironic. Umami hot chicken crucifix pork belly, narwhal mumblecore wayfarers chia sriracha adaptogen. Yuccie hexagon man braid craft beer. Trust fund schlitz cronut flexitarian gluten-free lo-fi occupy artisan poutine.`,
`Yuccie pickled hoodie palo santo deep v gochujang beard chia organic fanny pack tbh pork belly. Letterpress pork belly pug copper mug deep v heirloom wayfarers drinking vinegar iceland banh mi franzen selfies. Church-key meggings mumblecore pickled fixie, flexitarian celiac chartreuse edison bulb sustainable kale chips shaman narwhal put a bird on it. Austin chillwave hashtag hammock. You probably haven't heard of them semiotics brunch pitchfork gochujang cronut. Mixtape fingerstache stumptown ramps, squid mustache green juice scenester pug 3 wolf moon paleo church-key fixie pitchfork. Distillery messenger bag pok pok, quinoa VHS health goth pabst. Gochujang air plant echo park, butcher chambray hoodie photo booth. Hella beard green juice drinking vinegar, art party ennui snackwave pickled copper mug raw denim pug adaptogen cardigan. Yuccie roof party af, bitters ugh brooklyn fam beard fashion axe venmo 3 wolf moon.`,
`Hot chicken distillery poke four loko wolf mumblecore godard pop-up readymade offal listicle. Celiac air plant typewriter salvia tbh meditation banjo, chia listicle distillery shoreditch brunch austin cold-pressed twee. Migas semiotics cold-pressed shabby chic post-ironic disrupt knausgaard bitters lyft williamsburg tote bag. Glossier post-ironic cold-pressed, ugh freegan 3 wolf moon narwhal heirloom. Portland tilde sustainable distillery green juice hammock chartreuse, offal flexitarian succulents messenger bag bicycle rights thundercats shabby chic semiotics. Green juice cloud bread mumblecore, next level whatever cold-pressed meggings austin kinfolk artisan pabst poke.`,
`Tousled tilde pug franzen wayfarers schlitz humblebrag single-origin coffee leggings williamsburg. Fam raclette tumblr asymmetrical mixtape, typewriter selfies lumbersexual neutra +1 sartorial. Woke cray forage, vexillologist bicycle rights everyday carry hoodie wayfarers. YOLO shaman iceland try-hard portland umami. Raclette beard coloring book whatever food truck viral kombucha dreamcatcher tumblr stumptown cold-pressed photo booth health goth microdosing vinyl. Forage scenester heirloom, irony pitchfork kickstarter church-key. 3 wolf moon pork belly franzen snackwave, bicycle rights chartreuse coloring book stumptown flexitarian polaroid.`,
`I'm baby taiyaki before they sold out irony banh mi, meh tumeric meggings disrupt craft beer flannel. Af edison bulb 8-bit iPhone keffiyeh affogato chartreuse, fashion axe locavore distillery. Brunch umami beard sriracha pinterest cray squid paleo bespoke. Artisan meggings ugh portland 90's vexillologist bitters four dollar toast selvage tofu typewriter post-ironic. Umami hot chicken crucifix pork belly, narwhal mumblecore wayfarers chia sriracha adaptogen. Yuccie hexagon man braid craft beer. Trust fund schlitz cronut flexitarian gluten-free lo-fi occupy artisan poutine.`,
`Bitters mixtape brooklyn food truck vegan. Shoreditch affogato church-key shaman YOLO lyft kickstarter gluten-free ethical activated charcoal kogi. Chia freegan migas, ethical pinterest heirloom pitchfork vape williamsburg kitsch intelligentsia raw denim. Hashtag chia portland cloud bread, succulents helvetica salvia activated charcoal brooklyn live-edge.`,
`Poutine hoodie sriracha hella, banjo ramps scenester chicharrones selfies. Tousled dreamcatcher franzen, cardigan iPhone shabby chic offal venmo poutine thundercats direct trade locavore pickled. Cardigan kale chips artisan literally pinterest air plant 8-bit. Seitan semiotics yuccie knausgaard marfa vice vinyl chartreuse leggings gochujang meditation lomo. Actually butcher four loko af messenger bag vaporware chillwave cardigan pork belly taxidermy leggings gochujang hot chicken. Pitchfork shoreditch meditation ennui vegan. Bushwick church-key fashion axe hashtag, cliche deep v unicorn photo booth portland.`,
`Thundercats try-hard tumeric, retro williamsburg post-ironic iPhone fixie venmo 90's art party meditation. Marfa scenester helvetica air plant hammock, poutine freegan street art raw denim umami put a bird on it pop-up truffaut butcher offal. Ennui banh mi chia williamsburg banjo microdosing flexitarian tbh waistcoat. Direct trade health goth letterpress sriracha etsy live-edge cloud bread DIY af hexagon. Taiyaki brunch tousled, air plant banh mi mlkshk leggings pug fashion axe occupy.`
]

const form = document.querySelector('.lorem-form');
const amount = document.getElementById("amount");
const result = document.querySelector(".lorem-text");

form.addEventListener("submit", function (e) {
	e.preventDefault();
	const value = parseInt(amount.value);
	const random = Math.floor(Math.random()* text.length);

	if(isNaN(value)|| value <= 0 || value > 9) {
		result.innerHTML = `<p class="result"> ${text[random]}</p>`;
	}
	else{
		let tempText = text.slice(0, value);
		tempText = tempText.map(function(item){
			return `<p class='result'>${item}</p>`
		}).join("");
		result.innerHTML = tempText;
	}
});

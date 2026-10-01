const CO={name:'Liner',legal:'SARL Import/Export Agroalimentaire Liner',since:2002,tel:'+213 23 74 85 69',telh:'+21323748569',mail:'linerimport@yahoo.fr',
 siege:'Cité Mouaissia n°2, lot n°131, local n°02, Hammadi, Boumerdès',usine:'Zone industrielle, lot n°05, Oued Smar, Alger',fb:'https://www.facebook.com/search/top?q=Tutku%20Algerie'};
const CAT={barres:['Barres 10 DA','Le plaisir à petit prix'],tablettes:['Tablettes','Chocolat fourré MariClass'],praline:['Praliné','Bonbons fourrés à partager'],biscuits:['Biscuits','Tutku mosaïque'],tartiner:['À tartiner','Pâte noisettes Tutku']};
const P={
duo:{name:'Duo Milk & Cocoa',ar:'ديو',cat:'barres',img:'img/duobox.webp',camp:'img/camp-duo.jpg',c:'#c8102e',price:'10 DA',mood:['croquant','caramel'],
 short:'Végécao fourré à la crème, goût chocolat, caramel et krispy.',pts:['Fourré à la crème','Chocolat, caramel & krispy','Présentoir de 24 barres'],var:['Milk & Cocoa','Choco & Cocoa blanc']},
maxi:{name:'Maxi Class',ar:'ماكسي كلاس',cat:'barres',img:'img/maxi.webp',camp:'img/camp-10da.jpg',c:'#7bbf2a',price:'10 DA',mood:['fruite','noisette'],
 short:'La barre fourrée à la crème, en trois parfums.',pts:['Fourrée à la crème','Fraise, framboise, noisette','Barre à 10 DA'],var:['Fraise','Framboise','Noisette']},
panache:{name:'Panaché Bubbly Karamelli',ar:'باناشي',cat:'barres',img:'img/panbox.webp',camp:'img/camp-panache.jpg',c:'#6b2a7a',price:'10 DA',mood:['caramel','fruite','fondant'],
 short:'Végécao bullé fourré à la crème : caramel, fraise ou framboise.',pts:['Texture bullée','Caramel, fraise, framboise','Présentoir de 24 pièces'],var:['Caramel','Fraise','Framboise']},
tutkubar:{name:'Tutku Chocolat',ar:'توتكو',cat:'barres',img:'img/camp-noir.jpg',photo:true,camp:'img/camp-noir.jpg',c:'#8a1c1c',price:'10 DA',mood:['fondant','noisette'],
 short:'La barre Tutku, chocolat noir, noisette, fraise ou framboise.',pts:['Qualité premium','Chocolat noir, noisette, fruits','Barre à 10 DA'],var:['Chocolat noir','Noisette','Fraise','Framboise']},
mariclass:{name:'MariClass',ar:'ماري كلاس',cat:'tablettes',img:'img/mc-caramel.webp',camp:'img/camp-gamme.jpg',c:'#3a2016',mood:['fondant','caramel','fruite','noisette'],
 short:'Chocolat au lait fourré, une tablette pour chaque envie.',pts:['Chocolat au lait fourré','4 saveurs','Pour les moments de plaisir'],var:['Framboise & crème','Caramel','Noisette & crème','Chocolat noir'],imgs:['img/mc-framboise.webp','img/mc-caramel.webp','img/mc-noisette.webp','img/mc-noir.webp']},
praline:{name:'Praliné',ar:'برالين',cat:'praline',img:'img/pr-lait.webp',camp:'img/camp-praline.jpg',c:'#1f6fbf',mood:['partager','fondant','noisette'],
 short:'Des bonbons au chocolat fourrés, en sachets à partager.',pts:['Fourrage crémeux','6 saveurs','Idéal pour les fêtes et les invités'],var:['Noisette','Lait','Crémeux','Amande','Noisette noire','Chocolat noir'],imgs:['img/pr-noisette.webp','img/pr-lait.webp','img/pr-creme.webp','img/pr-amande.webp','img/pr-noir.webp','img/pr-choco.webp']},
reflex:{name:'Reflex Mini Chocolate',ar:'ريفلكس',cat:'praline',img:'img/camp-reflex.jpg',photo:true,camp:'img/camp-reflex.jpg',c:'#d32f2f',mood:['partager'],
 short:'Mini chocolats emballés un à un, en grand sachet.',pts:['Mini chocolats','Emballage individuel','Grand sachet familial'],var:['Blanc','Or']},
tutku:{name:'Tutku Biscuit',ar:'توتكو',cat:'biscuits',img:'img/eti40.webp',camp:'img/camp-eti.jpg',c:'#b3121f',mood:['fondant','croquant'],
 short:'Biscuit mosaïque fourré à la crème de cacao. Une merveille d\'ETİ.',pts:['Biscuit mosaïque bicolore','Cœur crème de cacao fondant','Format 40 g et sachet 180 g'],var:['Unité 40 g','Sachet 180 g'],imgs:['img/eti40.webp','img/pouch.webp']},
pate:{name:'Tutku Pâte à tartiner',ar:'عجينة الطلي',cat:'tartiner',img:'img/jar.webp',camp:'img/camp-jar.jpg',c:'#e0a21c',mood:['noisette','fondant'],
 short:'La pâte à tartiner aux noisettes Tutku, en pot de 350 g.',pts:['Aux noisettes','Pot de 350 g','Carton de 12 pots'],var:['Noisettes 350 g']}
};
const ORDER=['duo','tutkubar','maxi','panache','mariclass','praline','reflex','tutku','pate'];
const MOODS=[['croquant','Croquant','🥨'],['fondant','Fondant','🍫'],['fruite','Fruité','🍓'],['noisette','Noisette','🌰'],['caramel','Caramel','🍯'],['partager','À partager','🎉']];

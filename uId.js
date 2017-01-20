
var uId = "";
db.book_page.find({}).forEach(function(doc){

	for( i=doc.page.length-1; i >= 0; i--){

	  	if ( doc.itemMainId == undefined ) {
			uId+='_';
		} else { uId+=doc.itemMainId }

		if (doc.itemSubId == undefined ) {
			uId+='_';
		} else { uId += doc.itemSubId }

		if (doc.itemSubNote == undefined ) {
			uId+='_';
		} else { uId+='_'; }

		if (doc.page[i].page.pageNum == undefined ) {
			uId+='_';
		} else { uId += doc.page[i].page. pageNum }

		if (doc.page[i].page.pageSubId == undefined ) {
			uId+='_';
		} else { uId += doc.page[i].page.pageSubId}

		if (doc.page[i].page.pageSubNote == undefined ) {
			uId+='_';
		} else { uId+='_';}

		print(uId)
		uId="";
	}
})

var uId = "";

db.source.find({"printedSources":{$exists:true}}).forEach(function(doc){

		if (doc.printedSources.itemMainId == " "){
			uId+='_'
		} else { uId+= doc.printedSources.itemMainId}

		if (doc.printedSources.itemSubId == " "){
			uId+='_'
		} else { uId+= doc.printedSources.itemSubId}

		if (doc.printedSources.itemSubNote == " "){
			uId+='_'
		} else { uId+='_'}

		if (doc.printedSources.page == ""){
			uId+='_'
		} else { uId+= doc.printedSources.page}

		if (doc.printedSources.pageSubId == ""){
			uId+='_'
		} else { uId+= doc.printedSources.pageSubId}

		if (doc.printedSources.pageSubNote == ""){
			uId+='_'
		} else { uId+='_'}

		print(uId + "\t - " + doc.id);
		uId="";
})

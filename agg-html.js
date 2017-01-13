
db.sourceRmnyPageColl.find({}).forEach(function(test){
	for ( i=test.pageColl.length-1; i >= 0; i-- ){
		//print(test.pageColl[i].pageNum)
		//print(test.printedSources.page)
		if ( test.pageColl[i].pageNum ==  test.printedSources.page ) {
			print(': ' + test.pageColl[i].pageNum + ' --> ' + test.id + "\n" +
				 "http://mek.oszk.hu/" + test.rmny.MEKUrl.path1 + "/" + test.rmny.MEKUrl.path2 + '/html/' + 
				test.pageColl[i].MEKUrl.path4 + '.html'
			)
			
		}
	}
})

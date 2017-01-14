db.sourceRmnyPageColl.find({}).forEach(function(test){
	for ( i=test.pageColl.length-1; i >= 0; i-- ){
		if ( test.pageColl[i].pageNum ==  test.printedSources.page ) {
			print(
				test.id + "," + test.pageColl[i].pageNum + "," +   
				"http://mek.oszk.hu/" + test.rmny.MEKUrl.path1 + "/" + test.rmny.MEKUrl.path2 + '/html/' +
				test.pageColl[i].MEKUrl.path4 + '.html')

		}
	}
})
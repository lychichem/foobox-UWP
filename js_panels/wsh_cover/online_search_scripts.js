// You can add your own sources here. Just add "SearchItem" object into "SearchItems" array, all the sources will be displayed in context menu.
/* SearchItem properties:
name:	Name displayed in context menu, titleformat supported.
url:	URL pattern, use "%s" to replace the keyword.
keyword:	Searching keyword, i.e. "%s", titleformat supported.
GetUrl:	Function returns the final url, if this was specified, "url" and "keyword" properties will be ignored.
*/
var name, url, keyword, GetUrl;

// AllCdCovers.com
name = "AllCdCovers.com";
url = "http://www.allcdcovers.com/search/music/all/%s/1";
keyword = "[%album artist% ][%album%]";
SearchItems.push(new SearchItem(name, url, keyword));

// Last.fm
name = "Last.fm";
url = "http://www.last.fm/search?q=%s&type=album";
keyword = "[%album artist% ][%album%]";
SearchItems.push(new SearchItem(name, url, keyword));

// Amazon.com
name = "Amazon.com";
url = "http://www.amazon.com/s/ref=nb_sb_noss?__mk_zh_CN=%E4%BA%9A%E9%A9%AC%E9%80%8A%E7%BD%91%E7%AB%99&url=search-alias%3Daps&field-keywords=%s&x=0&y=0";
keyword = "[%album artist% ][%album%]";
SearchItems.push(new SearchItem(name, url, keyword));

// Xiami.com
name = "Xiami.com";
url = "http://www.xiami.com/search/album?key=%s";
keyword = "[%album artist% ][%album%]";
SearchItems.push(new SearchItem(name, url, keyword));

// Album Art Downloader XUI
/*
name = "Album Art Downloader XUI";
GetUrl = function(metadb){
	var url = fb.ProfilePath + "albumart\\AlbumArt.exe [/artist %album artist%] [/album %album%] /path $ifgreater($strstr(%_path_raw%,'unpack://'),0," + fb.ProfilePath + "covers\\%album artist% - %album%.jpg,$directory_path(%path%)\\cover.jpg) /sources 'Album Art Exchange,Amazon.jp,Amazon,CD Universe,Discogs,Coveralia,CoverIsland,Cover-Paradies,Freecovers,GoogleImage' ";
	url = fb.TitleFormat(url).EvalWithMetadb(metadb);
	return url;
}
SearchItems.push(new SearchItem(name, "", "", GetUrl));
*/

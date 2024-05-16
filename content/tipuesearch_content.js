var tipuesearch = {"pages": [{'title': 'About', 'text': '網頁:  https://41123207andy.github.io/cd2024/ \n 網誌:  https://41123207andy.github.io/cd2024//blog \n 簡報:  https://41123207andy.github.io/cd2024/reveal \n 倉儲:  https://github.com/41123207Andy/cd2024 \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'cmsimde', 'text': "SMap  - SiteMap - 依照階次列出網站的所有頁面. \n EditA  - Edit All page - 將所有頁面放入編輯模式中, 主要用來處理頁面搬遷, 刪除或決定衝突頁面內容版本. \n Edit  - Edit page - 先選擇要編輯的單一頁面後, 再點選 Edit, 即可進入單一頁面的編輯模式. \n Config  - Configure Site - 編輯頁面標題與管理者密碼. \n Search  - 動態頁面內容的關鍵字搜尋. \n IUpload  - Image file Upload - 圖檔的上傳功能, 可以上傳 jpg, png 與 gif 檔案, 其中若在手機上傳圖檔, 系統會自動將圖片檔案縮小為 800x800 大小. \n IList  - Image file List - 列出可以直接在頁面編輯模式中引用的圖片檔案. \n FUpload  - File Upload - 一般檔案的上傳功能, 目前可以上傳的檔案副檔名包括 'jpg', 'png', 'gif', '7z', 'pdf', 'zip', 'ttt', 'stl', 'txt', 'html', 'mp4' 等, 使用者可以自行修改. \n FList  - File List - 列出可以直接在頁面編輯模式中引用的上傳檔案. \n Logout  - 登出頁面編輯模式. \n Convert  - 將動態網站中位於 config/content.htm 檔案, 透過分頁設定轉為 content 目錄中的靜態網頁. \n acp  - git add, git commit 與 git push, 通常只有在 localhost 或自架主機上利用網頁表單協助將倉儲改版內容推向 Github 倉儲. \n SStatic  - Start Static Site - 利用 Python 啟動網站伺服功能, 可以讓使用者檢查轉檔後的靜態網站內容. \n RStatic  - Replit Static Site URL - 僅用於 Replit 模式, 當使用者按下 SStatic 後, 可以按下 RStatic 進入當下尚未推向 Github Pages 的靜態網站. \n 80  - 由 init.py 中 static_port 所決定的連結字串, 一般不使用 80, 只有在 Replit 中為了與動態網站共用 port, 才特別設為 80. \n \n", 'tags': '', 'url': 'cmsimde.html'}, {'title': 'Replit', 'text': 'https://replit.com \n 利用 init_replit 指令安裝所需 Python 模組 chmod u+x init_replit ./init_replit \n On Replit: \n .replit: python3 main.py \n chmod u+x cms init_replit \n ./init_replit \n for cmsimde_site (not needed): git submodule update --init --recursive \n for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent \n password generator:\xa0 https://mde.tw/cmsite/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/b92b16621dd0246c352cf13d6463b333/raw/0bfa669750aba3abe48554509bbd43d65b6e5c82/hashlib_password_generator.py \xa0 \n \n for IPv6 only Ubuntu: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.com ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p for Replit: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.co #since Replit works for IPv4, therefore no ProxyCommand setting needed #ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n \n \n', 'tags': '', 'url': 'Replit.html'}, {'title': 'Brython', 'text': "https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:['./../cmsimde/static/','./../downloads/py/']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n \n", 'tags': '', 'url': 'Brython.html'}, {'title': 'NX', 'text': '', 'tags': '', 'url': 'NX.html'}, {'title': 'w12 實習任務一', 'text': 'journal.vb \n \n \' NX 1872 \n \' Journal created by Admin on Thu May 9 15:20:28 2024 台北標準時間 \n \n \' \n Imports  System \n Imports  NXOpen \n \n Module  NXJournal \n Sub  Main ( ByVal  args()  As   String )  \n \n Dim  theSession  As  NXOpen.Session = NXOpen.Session.GetSession() \n Dim  workPart  As  NXOpen.Part = theSession.Parts.Work \n \n Dim  displayPart  As  NXOpen.Part = theSession.Parts.Display \n \n \' ---------------------------------------------- \n \' 功能表：插入(S)->基準/點(D)->基準平面(D)... \n \' ---------------------------------------------- \n Dim  markId1  As  NXOpen.Session.UndoMarkId =  Nothing \n markId1 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible,  "起點" ) \n \n Dim  nullNXOpen_Features_Feature  As  NXOpen.Features.Feature =  Nothing \n \n Dim  datumPlaneBuilder1  As  NXOpen.Features.DatumPlaneBuilder =  Nothing \n datumPlaneBuilder1 = workPart.Features.CreateDatumPlaneBuilder(nullNXOpen_Features_Feature) \n \n Dim  plane1  As  NXOpen.Plane =  Nothing \n plane1 = datumPlaneBuilder1.GetPlane() \n \n Dim  unit1  As  NXOpen.Unit =  CType (workPart.UnitCollection.FindObject( "MilliMeter" ), NXOpen.Unit) \n \n Dim  expression1  As  NXOpen.Expression =  Nothing \n expression1 = workPart.Expressions.CreateSystemExpressionWithUnits( "0" , unit1) \n \n Dim  expression2  As  NXOpen.Expression =  Nothing \n expression2 = workPart.Expressions.CreateSystemExpressionWithUnits( "0" , unit1) \n \n Dim  coordinates1  As  NXOpen.Point3d =  New  NXOpen.Point3d( 0.0 ,  0.0 ,  0.0 ) \n Dim  point1  As  NXOpen.Point =  Nothing \n point1 = workPart.Points.CreatePoint(coordinates1) \n \n theSession.SetUndoMarkName(markId1,  "基準平面 對話方塊" ) \n \n plane1.SetUpdateOption(NXOpen.SmartObject.UpdateOption.WithinModeling) \n \n \' ---------------------------------------------- \n \' 功能表：插入(S)->基準/點(D)->基準座標系(C)... \n \' ---------------------------------------------- \n datumPlaneBuilder1.Destroy() \n \n Try \n   \' 運算式仍然在使用中。 \n  workPart.Expressions.Delete(expression2) \n Catch  ex  As  NXException \n  ex.AssertErrorCode( 1050029 ) \n End Try \n \n Try \n   \' 運算式仍然在使用中。 \n  workPart.Expressions.Delete(expression1) \n Catch  ex  As  NXException \n  ex.AssertErrorCode( 1050029 ) \n End Try \n \n theSession.UndoToMark(markId1,  Nothing ) \n \n theSession.DeleteUndoMark(markId1,  Nothing ) \n \n Dim  markId2  As  NXOpen.Session.UndoMarkId =  Nothing \n markId2 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible,  "起點" ) \n \n Dim  datumCsysBuilder1  As  NXOpen.Features.DatumCsysBuilder =  Nothing \n datumCsysBuilder1 = workPart.Features.CreateDatumCsysBuilder(nullNXOpen_Features_Feature) \n \n Dim  origin1  As  NXOpen.Point3d =  New  NXOpen.Point3d( 0.0 ,  0.0 ,  0.0 ) \n Dim  normal1  As  NXOpen.Vector3d =  New  NXOpen.Vector3d( 0.0 ,  0.0 ,  1.0 ) \n Dim  plane2  As  NXOpen.Plane =  Nothing \n plane2 = workPart.Planes.CreatePlane(origin1, normal1, NXOpen.SmartObject.UpdateOption.WithinModeling) \n \n Dim  expression3  As  NXOpen.Expression =  Nothing \n expression3 = workPart.Expressions.CreateSystemExpressionWithUnits( "0" , unit1) \n \n Dim  expression4  As  NXOpen.Expression =  Nothing \n expression4 = workPart.Expressions.CreateSystemExpressionWithUnits( "0" , unit1) \n \n Dim  origin2  As  NXOpen.Point3d =  New  NXOpen.Point3d( 0.0 ,  0.0 ,  0.0 ) \n Dim  normal2  As  NXOpen.Vector3d =  New  NXOpen.Vector3d( 0.0 ,  0.0 ,  1.0 ) \n Dim  plane3  As  NXOpen.Plane =  Nothing \n plane3 = workPart.Planes.CreatePlane(origin2, normal2, NXOpen.SmartObject.UpdateOption.WithinModeling) \n \n Dim  expression5  As  NXOpen.Expression =  Nothing \n expression5 = workPart.Expressions.CreateSystemExpressionWithUnits( "0" , unit1) \n \n Dim  expression6  As  NXOpen.Expression =  Nothing \n expression6 = workPart.Expressions.CreateSystemExpressionWithUnits( "0" , unit1) \n \n Dim  origin3  As  NXOpen.Point3d =  New  NXOpen.Point3d( 0.0 ,  0.0 ,  0.0 ) \n Dim  normal3  As  NXOpen.Vector3d =  New  NXOpen.Vector3d( 0.0 ,  0.0 ,  1.0 ) \n Dim  plane4  As  NXOpen.Plane =  Nothing \n plane4 = workPart.Planes.CreatePlane(origin3, normal3, NXOpen.SmartObject.UpdateOption.WithinModeling) \n \n Dim  expression7  As  NXOpen.Expression =  Nothing \n expression7 = workPart.Expressions.CreateSystemExpressionWithUnits( "0" , unit1) \n \n Dim  expression8  As  NXOpen.Expression =  Nothing \n expression8 = workPart.Expressions.CreateSystemExpressionWithUnits( "0" , unit1) \n \n Dim  origin4  As  NXOpen.Point3d =  New  NXOpen.Point3d( 0.0 ,  0.0 ,  0.0 ) \n Dim  normal4  As  NXOpen.Vector3d =  New  NXOpen.Vector3d( 0.0 ,  0.0 ,  1.0 ) \n Dim  plane5  As  NXOpen.Plane =  Nothing \n plane5 = workPart.Planes.CreatePlane(origin4, normal4, NXOpen.SmartObject.UpdateOption.WithinModeling) \n \n Dim  expression9  As  NXOpen.Expression =  Nothing \n expression9 = workPart.Expressions.CreateSystemExpressionWithUnits( "0" , unit1) \n \n Dim  expression10  As  NXOpen.Expression =  Nothing \n expression10 = workPart.Expressions.CreateSystemExpressionWithUnits( "0" , unit1) \n \n Dim  unit2  As  NXOpen.Unit =  CType (workPart.UnitCollection.FindObject( "Degrees" ), NXOpen.Unit) \n \n Dim  expression11  As  NXOpen.Expression =  Nothing \n expression11 = workPart.Expressions.CreateSystemExpressionWithUnits( "0" , unit2) \n \n Dim  expression12  As  NXOpen.Expression =  Nothing \n expression12 = workPart.Expressions.CreateSystemExpressionWithUnits( "0" , unit2) \n \n Dim  expression13  As  NXOpen.Expression =  Nothing \n expression13 = workPart.Expressions.CreateSystemExpressionWithUnits( "0" , unit2) \n \n Dim  expression14  As  NXOpen.Expression =  Nothing \n expression14 = workPart.Expressions.CreateSystemExpressionWithUnits( "0" , unit1) \n \n Dim  expression15  As  NXOpen.Expression =  Nothing \n expression15 = workPart.Expressions.CreateSystemExpressionWithUnits( "0" , unit2) \n \n Dim  expression16  As  NXOpen.Expression =  Nothing \n expression16 = workPart.Expressions.CreateSystemExpressionWithUnits( "0" , unit1) \n \n Dim  expression17  As  NXOpen.Expression =  Nothing \n expression17 = workPart.Expressions.CreateSystemExpressionWithUnits( "0" , unit2) \n \n Dim  expression18  As  NXOpen.Expression =  Nothing \n expression18 = workPart.Expressions.CreateSystemExpressionWithUnits( "0" , unit1) \n \n Dim  expression19  As  NXOpen.Expression =  Nothing \n expression19 = workPart.Expressions.CreateSystemExpressionWithUnits( "0" , unit2) \n \n expression14.RightHandSide =  "0" \n \n expression16.RightHandSide =  "0" \n \n expression18.RightHandSide =  "0" \n \n expression15.RightHandSide =  "0" \n \n expression17.RightHandSide =  "0" \n \n expression19.RightHandSide =  "0" \n \n theSession.SetUndoMarkName(markId2,  "基準座標系 對話方塊" ) \n \n \' ---------------------------------------------- \n \' 功能表：插入(S)->草圖(H)... \n \' ---------------------------------------------- \n Dim  markId3  As  NXOpen.Session.UndoMarkId =  Nothing \n markId3 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible,  "基準座標系" ) \n \n theSession.DeleteUndoMark(markId3,  Nothing ) \n \n Dim  markId4  As  NXOpen.Session.UndoMarkId =  Nothing \n markId4 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible,  "基準座標系" ) \n \n Dim  origin5  As  NXOpen.Point3d =  New  NXOpen.Point3d( 0.0 ,  0.0 ,  0.0 ) \n Dim  xDirection1  As  NXOpen.Vector3d =  New  NXOpen.Vector3d( 1.0 ,  0.0 ,  0.0 ) \n Dim  yDirection1  As  NXOpen.Vector3d =  New  NXOpen.Vector3d( 0.0 ,  1.0 ,  0.0 ) \n Dim  xform1  As  NXOpen.Xform =  Nothing \n xform1 = workPart.Xforms.CreateXform(origin5, xDirection1, yDirection1, NXOpen.SmartObject.UpdateOption.WithinModeling,  1.0 ) \n \n Dim  cartesianCoordinateSystem1  As  NXOpen.CartesianCoordinateSystem =  Nothing \n cartesianCoordinateSystem1 = workPart.CoordinateSystems.CreateCoordinateSystem(xform1, NXOpen.SmartObject.UpdateOption.WithinModeling) \n \n theSession.DeleteUndoMark(markId4,  Nothing ) \n \n theSession.SetUndoMarkName(markId2,  "基準座標系" ) \n \n workPart.Expressions.Delete(expression14) \n \n workPart.Expressions.Delete(expression16) \n \n workPart.Expressions.Delete(expression18) \n \n workPart.Expressions.Delete(expression15) \n \n workPart.Expressions.Delete(expression17) \n \n workPart.Expressions.Delete(expression19) \n \n workPart.Expressions.Delete(expression11) \n \n workPart.Expressions.Delete(expression12) \n \n workPart.Expressions.Delete(expression13) \n \n Try \n   \' 運算式仍然在使用中。 \n  workPart.Expressions.Delete(expression4) \n Catch  ex  As  NXException \n  ex.AssertErrorCode( 1050029 ) \n End Try \n \n Try \n   \' 運算式仍然在使用中。 \n  workPart.Expressions.Delete(expression6) \n Catch  ex  As  NXException \n  ex.AssertErrorCode( 1050029 ) \n End Try \n \n Try \n   \' 運算式仍然在使用中。 \n  workPart.Expressions.Delete(expression8) \n Catch  ex  As  NXException \n  ex.AssertErrorCode( 1050029 ) \n End Try \n \n Try \n   \' 運算式仍然在使用中。 \n  workPart.Expressions.Delete(expression10) \n Catch  ex  As  NXException \n  ex.AssertErrorCode( 1050029 ) \n End Try \n \n Try \n   \' 運算式仍然在使用中。 \n  workPart.Expressions.Delete(expression3) \n Catch  ex  As  NXException \n  ex.AssertErrorCode( 1050029 ) \n End Try \n \n plane2.DestroyPlane() \n \n Try \n   \' 運算式仍然在使用中。 \n  workPart.Expressions.Delete(expression5) \n Catch  ex  As  NXException \n  ex.AssertErrorCode( 1050029 ) \n End Try \n \n plane3.DestroyPlane() \n \n Try \n   \' 運算式仍然在使用中。 \n  workPart.Expressions.Delete(expression7) \n Catch  ex  As  NXException \n  ex.AssertErrorCode( 1050029 ) \n End Try \n \n plane4.DestroyPlane() \n \n Try \n   \' 運算式仍然在使用中。 \n  workPart.Expressions.Delete(expression9) \n Catch  ex  As  NXException \n  ex.AssertErrorCode( 1050029 ) \n End Try \n \n plane5.DestroyPlane() \n \n datumCsysBuilder1.Csys = cartesianCoordinateSystem1 \n \n datumCsysBuilder1.DisplayScaleFactor =  1.25 \n \n Dim  nXObject1  As  NXOpen.NXObject =  Nothing \n nXObject1 = datumCsysBuilder1.Commit() \n \n datumCsysBuilder1.Destroy() \n \n Dim  markId5  As  NXOpen.Session.UndoMarkId =  Nothing \n markId5 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible,  "起點" ) \n \n Dim  nullNXOpen_Sketch  As  NXOpen.Sketch =  Nothing \n \n Dim  sketchInPlaceBuilder1  As  NXOpen.SketchInPlaceBuilder =  Nothing \n sketchInPlaceBuilder1 = workPart.Sketches.CreateSketchInPlaceBuilder2(nullNXOpen_Sketch) \n \n Dim  origin6  As  NXOpen.Point3d =  New  NXOpen.Point3d( 0.0 ,  0.0 ,  0.0 ) \n Dim  normal5  As  NXOpen.Vector3d =  New  NXOpen.Vector3d( 0.0 ,  0.0 ,  1.0 ) \n Dim  plane6  As  NXOpen.Plane =  Nothing \n plane6 = workPart.Planes.CreatePlane(origin6, normal5, NXOpen.SmartObject.UpdateOption.WithinModeling) \n \n sketchInPlaceBuilder1.PlaneReference = plane6 \n \n Dim  expression20  As  NXOpen.Expression =  Nothing \n expression20 = workPart.Expressions.CreateSystemExpressionWithUnits( "0" , unit1) \n \n Dim  expression21  As  NXOpen.Expression =  Nothing \n expression21 = workPart.Expressions.CreateSystemExpressionWithUnits( "0" , unit1) \n \n Dim  sketchAlongPathBuilder1  As  NXOpen.SketchAlongPathBuilder =  Nothing \n sketchAlongPathBuilder1 = workPart.Sketches.CreateSketchAlongPathBuilder(nullNXOpen_Sketch) \n \n theSession.SetUndoMarkName(markId5,  "建立草圖 對話方塊" ) \n \n Dim  markId6  As  NXOpen.Session.UndoMarkId =  Nothing \n markId6 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible,  "建立草圖" ) \n \n theSession.DeleteUndoMark(markId6,  Nothing ) \n \n Dim  markId7  As  NXOpen.Session.UndoMarkId =  Nothing \n markId7 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible,  "建立草圖" ) \n \n theSession.Preferences.Sketch.CreateInferredConstraints =  True \n \n theSession.Preferences.Sketch.ContinuousAutoDimensioning =  True \n \n theSession.Preferences.Sketch.DimensionLabel = NXOpen.Preferences.SketchPreferences.DimensionLabelType.Expression \n \n theSession.Preferences.Sketch.TextSizeFixed =  True \n \n theSession.Preferences.Sketch.FixedTextSize =  3.0 \n \n theSession.Preferences.Sketch.DisplayParenthesesOnReferenceDimensions =  True \n \n theSession.Preferences.Sketch.DisplayReferenceGeometry =  False \n \n theSession.Preferences.Sketch.ConstraintSymbolSize =  3.0 \n \n theSession.Preferences.Sketch.DisplayObjectColor =  False \n \n theSession.Preferences.Sketch.DisplayObjectName =  True \n \n Dim  nXObject2  As  NXOpen.NXObject =  Nothing \n nXObject2 = sketchInPlaceBuilder1.Commit() \n \n Dim  sketch1  As  NXOpen.Sketch =  CType (nXObject2, NXOpen.Sketch) \n \n Dim  feature1  As  NXOpen.Features.Feature =  Nothing \n feature1 = sketch1.Feature \n \n Dim  markId8  As  NXOpen.Session.UndoMarkId =  Nothing \n markId8 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible,  "update" ) \n \n Dim  nErrs1  As   Integer  =  Nothing \n nErrs1 = theSession.UpdateManager.DoUpdate(markId8) \n \n sketch1.Activate(NXOpen.Sketch.ViewReorient. True ) \n \n theSession.DeleteUndoMark(markId7,  Nothing ) \n \n theSession.SetUndoMarkName(markId5,  "建立草圖" ) \n \n sketchInPlaceBuilder1.Destroy() \n \n sketchAlongPathBuilder1.Destroy() \n \n Try \n   \' 運算式仍然在使用中。 \n  workPart.Expressions.Delete(expression21) \n Catch  ex  As  NXException \n  ex.AssertErrorCode( 1050029 ) \n End Try \n \n Try \n   \' 運算式仍然在使用中。 \n  workPart.Expressions.Delete(expression20) \n Catch  ex  As  NXException \n  ex.AssertErrorCode( 1050029 ) \n End Try \n \n plane6.DestroyPlane() \n \n Dim  scaleAboutPoint1  As  NXOpen.Point3d =  New  NXOpen.Point3d( 0.32929284143071819 , - 0.40832312337407828 ,  0.0 ) \n Dim  viewCenter1  As  NXOpen.Point3d =  New  NXOpen.Point3d(- 0.3292928414306901 ,  0.4083231233740659 ,  0.0 ) \n workPart.ModelingViews.WorkView.ZoomAboutPoint( 1.25 , scaleAboutPoint1, viewCenter1) \n \n Dim  scaleAboutPoint2  As  NXOpen.Point3d =  New  NXOpen.Point3d( 0.1159110801836211 , - 0.29504638592191679 ,  0.0 ) \n Dim  viewCenter2  As  NXOpen.Point3d =  New  NXOpen.Point3d(- 0.11591108018359235 ,  0.29504638592190419 ,  0.0 ) \n workPart.ModelingViews.WorkView.ZoomAboutPoint( 1.25 , scaleAboutPoint2, viewCenter2) \n \n Dim  scaleAboutPoint3  As  NXOpen.Point3d =  New  NXOpen.Point3d( 0.059009277184396122 , - 0.23603710873753417 ,  0.0 ) \n Dim  viewCenter3  As  NXOpen.Point3d =  New  NXOpen.Point3d(- 0.059009277184367367 ,  0.23603710873752196 ,  0.0 ) \n workPart.ModelingViews.WorkView.ZoomAboutPoint( 1.25 , scaleAboutPoint3, viewCenter3) \n \n Dim  scaleAboutPoint4  As  NXOpen.Point3d =  New  NXOpen.Point3d( 0.047207421747519185 , - 0.18882968699002903 ,  0.0 ) \n Dim  viewCenter4  As  NXOpen.Point3d =  New  NXOpen.Point3d(- 0.047207421747490437 ,  0.18882968699001637 ,  0.0 ) \n workPart.ModelingViews.WorkView.ZoomAboutPoint( 0.80000000000000004 , scaleAboutPoint4, viewCenter4) \n \n Dim  scaleAboutPoint5  As  NXOpen.Point3d =  New  NXOpen.Point3d( 0.059009277184396101 , - 0.23603710873753411 ,  0.0 ) \n Dim  viewCenter5  As  NXOpen.Point3d =  New  NXOpen.Point3d(- 0.059009277184367354 ,  0.23603710873752259 ,  0.0 ) \n workPart.ModelingViews.WorkView.ZoomAboutPoint( 0.80000000000000004 , scaleAboutPoint5, viewCenter5) \n \n Dim  scaleAboutPoint6  As  NXOpen.Point3d =  New  NXOpen.Point3d( 0.073761596480491534 , - 0.29504638592191579 ,  0.0 ) \n Dim  viewCenter6  As  NXOpen.Point3d =  New  NXOpen.Point3d(- 0.073761596480462779 ,  0.29504638592190413 ,  0.0 ) \n workPart.ModelingViews.WorkView.ZoomAboutPoint( 0.80000000000000004 , scaleAboutPoint6, viewCenter6) \n \n Dim  scaleAboutPoint7  As  NXOpen.Point3d =  New  NXOpen.Point3d( 0.092201995600609918 , - 0.3688079824023936 ,  0.0 ) \n Dim  viewCenter7  As  NXOpen.Point3d =  New  NXOpen.Point3d(- 0.092201995600580719 ,  0.36880798240238238 ,  0.0 ) \n workPart.ModelingViews.WorkView.ZoomAboutPoint( 0.80000000000000004 , scaleAboutPoint7, viewCenter7) \n \n Dim  scaleAboutPoint8  As  NXOpen.Point3d =  New  NXOpen.Point3d( 0.18111106278689948 , - 0.32929284143070936 ,  0.0 ) \n Dim  viewCenter8  As  NXOpen.Point3d =  New  NXOpen.Point3d(- 0.18111106278687139 ,  0.32929284143069809 ,  0.0 ) \n workPart.ModelingViews.WorkView.ZoomAboutPoint( 1.25 , scaleAboutPoint8, viewCenter8) \n \n \' ---------------------------------------------- \n \' 功能表：插入(S)->草圖曲線(S)->圓(C)... \n \' ---------------------------------------------- \n Dim  markId9  As  NXOpen.Session.UndoMarkId =  Nothing \n markId9 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible,  "Profile short list" ) \n \n Dim  markId10  As  NXOpen.Session.UndoMarkId =  Nothing \n markId10 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible,  "Curve" ) \n \n Dim  expression22  As  NXOpen.Expression =  Nothing \n expression22 = workPart.Expressions.CreateSystemExpression( "2.8" ) \n \n theSession.SetUndoMarkVisibility(markId10,  "Curve" , NXOpen.Session.MarkVisibility.Visible) \n \n Dim  nXMatrix1  As  NXOpen.NXMatrix =  Nothing \n nXMatrix1 = theSession.ActiveSketch.Orientation \n \n Dim  center1  As  NXOpen.Point3d =  New  NXOpen.Point3d( 0.0 ,  0.0 ,  0.0 ) \n Dim  arc1  As  NXOpen.Arc =  Nothing \n arc1 = workPart.Curves.CreateArc(center1, nXMatrix1,  1.3999999999999999 ,  0.0 , (  360.0  * Math.Pi/ 180.0  )) \n \n theSession.ActiveSketch.AddGeometry(arc1, NXOpen.Sketch.InferConstraintsOption.InferNoConstraints) \n \n Dim  geom1_1  As  NXOpen.Sketch.ConstraintGeometry =  Nothing \n geom1_1.Geometry = arc1 \n geom1_1.PointType = NXOpen.Sketch.ConstraintPointType.ArcCenter \n geom1_1.SplineDefiningPointIndex =  0 \n Dim  geom2_1  As  NXOpen.Sketch.ConstraintGeometry =  Nothing \n Dim  datumCsys1  As  NXOpen.Features.DatumCsys =  CType (workPart.Features.FindObject( "SKETCH(1:1B)" ), NXOpen.Features.DatumCsys) \n \n Dim  point2  As  NXOpen.Point =  CType (datumCsys1.FindObject( "POINT 1" ), NXOpen.Point) \n \n geom2_1.Geometry = point2 \n geom2_1.PointType = NXOpen.Sketch.ConstraintPointType.None \n geom2_1.SplineDefiningPointIndex =  0 \n Dim  sketchGeometricConstraint1  As  NXOpen.SketchGeometricConstraint =  Nothing \n sketchGeometricConstraint1 = theSession.ActiveSketch.CreateCoincidentConstraint(geom1_1, geom2_1) \n \n Dim  dimObject1_1  As  NXOpen.Sketch.DimensionGeometry =  Nothing \n dimObject1_1.Geometry = arc1 \n dimObject1_1.AssocType = NXOpen.Sketch.AssocType.None \n dimObject1_1.AssocValue =  0 \n dimObject1_1.HelpPoint.X =  0.0 \n dimObject1_1.HelpPoint.Y =  0.0 \n dimObject1_1.HelpPoint.Z =  0.0 \n Dim  nullNXOpen_NXObject  As  NXOpen.NXObject =  Nothing \n \n dimObject1_1.View = nullNXOpen_NXObject \n Dim  dimOrigin1  As  NXOpen.Point3d =  New  NXOpen.Point3d( 0.0 ,  0.14934856430242965 ,  0.0 ) \n Dim  sketchDimensionalConstraint1  As  NXOpen.SketchDimensionalConstraint =  Nothing \n sketchDimensionalConstraint1 = theSession.ActiveSketch.CreateDiameterDimension(dimObject1_1, dimOrigin1, expression22, NXOpen.Sketch.DimensionOption.CreateAsDriving) \n \n Dim  dimension1  As  NXOpen.Annotations.Dimension =  Nothing \n dimension1 = sketchDimensionalConstraint1.AssociatedDimension \n \n theSession.ActiveSketch.Update() \n \n Dim  markId11  As  NXOpen.Session.UndoMarkId =  Nothing \n markId11 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible,  "Curve" ) \n \n \' ---------------------------------------------- \n \' 功能表：渲染樣式(D)->藝術外觀(T) \n \' ---------------------------------------------- \n Dim  nullNXOpen_Display_TrueStudio  As  NXOpen.Display.TrueStudio =  Nothing \n \n Dim  trueStudioBuilder1  As  NXOpen.Display.TrueStudioBuilder =  Nothing \n trueStudioBuilder1 = workPart.TrueStudioObjs.CreateTrueStudioBuilder(nullNXOpen_Display_TrueStudio) \n \n trueStudioBuilder1.ModeToggle =  True \n \n workPart.ModelingViews.WorkView.RenderingStyle = NXOpen.View.RenderingStyleType.Studio \n \n Dim  nXObject3  As  NXOpen.NXObject =  Nothing \n nXObject3 = trueStudioBuilder1.Commit() \n \n trueStudioBuilder1.Destroy() \n \n workPart.ModelingViews.WorkView.RenderingStyle = NXOpen.View.RenderingStyleType.Studio \n \n \' ---------------------------------------------- \n \' 功能表：檔案(F)->完成草圖(K) \n \' ---------------------------------------------- \n theSession.DeleteUndoMark(markId11,  "Curve" ) \n \n Dim  sketch2  As  NXOpen.Sketch =  Nothing \n sketch2 = theSession.ActiveSketch \n \n Dim  markId12  As  NXOpen.Session.UndoMarkId =  Nothing \n markId12 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible,  "Deactivate Sketch" ) \n \n theSession.ActiveSketch.Deactivate(NXOpen.Sketch.ViewReorient. True , NXOpen.Sketch.UpdateLevel.Model) \n \n \' ---------------------------------------------- \n \' 功能表：插入(S)->設計特徵(E)->拉伸(X)... \n \' ---------------------------------------------- \n Dim  markId13  As  NXOpen.Session.UndoMarkId =  Nothing \n markId13 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible,  "起點" ) \n \n Dim  extrudeBuilder1  As  NXOpen.Features.ExtrudeBuilder =  Nothing \n extrudeBuilder1 = workPart.Features.CreateExtrudeBuilder(nullNXOpen_Features_Feature) \n \n Dim  section1  As  NXOpen.Section =  Nothing \n section1 = workPart.Sections.CreateSection( 0.0094999999999999998 ,  0.01 ,  0.5 ) \n \n extrudeBuilder1.Section = section1 \n \n extrudeBuilder1.AllowSelfIntersectingSection( True ) \n \n Dim  expression23  As  NXOpen.Expression =  Nothing \n expression23 = workPart.Expressions.CreateSystemExpressionWithUnits( "2.00" , unit2) \n \n extrudeBuilder1.DistanceTolerance =  0.01 \n \n extrudeBuilder1.BooleanOperation.Type = NXOpen.GeometricUtilities.BooleanOperation.BooleanType.Create \n \n Dim  targetBodies1( 0 )  As  NXOpen.Body \n Dim  nullNXOpen_Body  As  NXOpen.Body =  Nothing \n \n targetBodies1( 0 ) = nullNXOpen_Body \n extrudeBuilder1.BooleanOperation.SetTargetBodies(targetBodies1) \n \n extrudeBuilder1.Limits.StartExtend.Value.SetFormula( "0" ) \n \n extrudeBuilder1.Limits.EndExtend.Value.SetFormula( "25" ) \n \n extrudeBuilder1.Offset.StartOffset.SetFormula( "0" ) \n \n extrudeBuilder1.Offset.EndOffset.SetFormula( "5" ) \n \n Dim  smartVolumeProfileBuilder1  As  NXOpen.GeometricUtilities.SmartVolumeProfileBuilder =  Nothing \n smartVolumeProfileBuilder1 = extrudeBuilder1.SmartVolumeProfile \n \n smartVolumeProfileBuilder1.OpenProfileSmartVolumeOption =  False \n \n smartVolumeProfileBuilder1.CloseProfileRule = NXOpen.GeometricUtilities.SmartVolumeProfileBuilder.CloseProfileRuleType.Fci \n \n theSession.SetUndoMarkName(markId13,  "拉伸 對話方塊" ) \n \n extrudeBuilder1.Limits.StartExtend.Value.SetFormula( "0" ) \n \n extrudeBuilder1.Limits.EndExtend.Value.SetFormula( "25" ) \n \n extrudeBuilder1.Draft.FrontDraftAngle.SetFormula( "2" ) \n \n extrudeBuilder1.Draft.BackDraftAngle.SetFormula( "2" ) \n \n extrudeBuilder1.Offset.StartOffset.SetFormula( "0" ) \n \n extrudeBuilder1.Offset.EndOffset.SetFormula( "5" ) \n \n section1.DistanceTolerance =  0.01 \n \n section1.ChainingTolerance =  0.0094999999999999998 \n \n section1.SetAllowedEntityTypes(NXOpen.Section.AllowTypes.OnlyCurves) \n \n Dim  markId14  As  NXOpen.Session.UndoMarkId =  Nothing \n markId14 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible,  "section mark" ) \n \n Dim  markId15  As  NXOpen.Session.UndoMarkId =  Nothing \n markId15 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible,  Nothing ) \n \n Dim  features1( 0 )  As  NXOpen.Features.Feature \n Dim  sketchFeature1  As  NXOpen.Features.SketchFeature =  CType (feature1, NXOpen.Features.SketchFeature) \n \n features1( 0 ) = sketchFeature1 \n Dim  curveFeatureRule1  As  NXOpen.CurveFeatureRule =  Nothing \n curveFeatureRule1 = workPart.ScRuleFactory.CreateRuleCurveFeature(features1) \n \n section1.AllowSelfIntersection( True ) \n \n Dim  rules1( 0 )  As  NXOpen.SelectionIntentRule \n rules1( 0 ) = curveFeatureRule1 \n Dim  helpPoint1  As  NXOpen.Point3d =  New  NXOpen.Point3d(- 1.3642199176742373 , - 0.31143699864209995 ,  0.0 ) \n section1.AddToSection(rules1, arc1, nullNXOpen_NXObject, nullNXOpen_NXObject, helpPoint1, NXOpen.Section.Mode.Create,  False ) \n \n theSession.DeleteUndoMark(markId15,  Nothing ) \n \n Dim  direction1  As  NXOpen.Direction =  Nothing \n direction1 = workPart.Directions.CreateDirection(sketch2, NXOpen.Sense.Forward, NXOpen.SmartObject.UpdateOption.WithinModeling) \n \n extrudeBuilder1.Direction = direction1 \n \n Dim  expression24  As  NXOpen.Expression =  Nothing \n expression24 = workPart.Expressions.CreateSystemExpressionWithUnits( "0" , unit1) \n \n theSession.DeleteUndoMark(markId14,  Nothing ) \n \n extrudeBuilder1.Limits.EndExtend.Value.SetFormula( "6" ) \n \n Dim  rotMatrix1  As  NXOpen.Matrix3x3 =  Nothing \n rotMatrix1.Xx =  0.34117009820603067 \n rotMatrix1.Xy =  0.93771583394525115 \n rotMatrix1.Xz =  0.065513196063442206 \n rotMatrix1.Yx = - 0.65255317952837755 \n rotMatrix1.Yy =  0.18610108969583089 \n rotMatrix1.Yz =  0.734534364275374 \n rotMatrix1.Zx =  0.67659242678106424 \n rotMatrix1.Zy = - 0.29335200558779939 \n rotMatrix1.Zz =  0.67540157598285466 \n Dim  translation1  As  NXOpen.Point3d =  New  NXOpen.Point3d(- 3.3086805620987789 ,  0.62693714873927764 , - 3.7567940257052665 ) \n workPart.ModelingViews.WorkView.SetRotationTranslationScale(rotMatrix1, translation1,  20.087236954786007 ) \n \n Dim  rotMatrix2  As  NXOpen.Matrix3x3 =  Nothing \n rotMatrix2.Xx =  0.35230914384389794 \n rotMatrix2.Xy =  0.9320219125607806 \n rotMatrix2.Xz =  0.084931864871331197 \n rotMatrix2.Yx = - 0.80449854395745402 \n rotMatrix2.Yy =  0.25523172209609529 \n rotMatrix2.Yz =  0.53631973747587947 \n rotMatrix2.Zx =  0.47818444133442228 \n rotMatrix2.Zy = - 0.25727790916128879 \n rotMatrix2.Zz =  0.83973074108506962 \n Dim  translation2  As  NXOpen.Point3d =  New  NXOpen.Point3d(- 3.3228413872155782 ,  0.68621575734774831 , - 4.5291485362901351 ) \n workPart.ModelingViews.WorkView.SetRotationTranslationScale(rotMatrix2, translation2,  20.087236954786007 ) \n \n Dim  markId16  As  NXOpen.Session.UndoMarkId =  Nothing \n markId16 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible,  "拉伸" ) \n \n theSession.DeleteUndoMark(markId16,  Nothing ) \n \n Dim  markId17  As  NXOpen.Session.UndoMarkId =  Nothing \n markId17 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible,  "拉伸" ) \n \n extrudeBuilder1.ParentFeatureInternal =  False \n \n Dim  feature2  As  NXOpen.Features.Feature =  Nothing \n feature2 = extrudeBuilder1.CommitFeature() \n \n theSession.DeleteUndoMark(markId17,  Nothing ) \n \n theSession.SetUndoMarkName(markId13,  "拉伸" ) \n \n Dim  expression25  As  NXOpen.Expression = extrudeBuilder1.Limits.StartExtend.Value \n \n Dim  expression26  As  NXOpen.Expression = extrudeBuilder1.Limits.EndExtend.Value \n \n extrudeBuilder1.Destroy() \n \n workPart.Expressions.Delete(expression23) \n \n workPart.Expressions.Delete(expression24) \n \n Dim  rotMatrix3  As  NXOpen.Matrix3x3 =  Nothing \n rotMatrix3.Xx =  0.32369084031626738 \n rotMatrix3.Xy = - 0.25406807483326743 \n rotMatrix3.Xz =  0.91141299817693289 \n rotMatrix3.Yx = - 0.89063788198691607 \n rotMatrix3.Yy =  0.24331311598439376 \n rotMatrix3.Yz =  0.3841391554629961 \n rotMatrix3.Zx = - 0.31935623223166798 \n rotMatrix3.Zy = - 0.93608126834184724 \n rotMatrix3.Zz = - 0.14752442507703645 \n Dim  translation3  As  NXOpen.Point3d =  New  NXOpen.Point3d(- 5.8022847871323835 ,  1.1427575033863984 , - 1.5673830378038165 ) \n workPart.ModelingViews.WorkView.SetRotationTranslationScale(rotMatrix3, translation3,  20.087236954786007 ) \n \n \' ---------------------------------------------- \n \' 功能表：工具(T)->動作記錄(J)->停止錄製(S) \n \' ---------------------------------------------- \n \n End Sub \n End Module \n \n \n \n', 'tags': '', 'url': 'w12 實習任務一.html'}, {'title': '鋼球平衡台 PID 控制', 'text': '\xa0 cd2024_ball_balancing_platform_control_ref.7z , \n \xa0-cd2024_2D Ball Balancer Control using QUARC.pdf \n', 'tags': '', 'url': '鋼球平衡台 PID 控制.html'}, {'title': '與詳細重點摘要', 'text': '1. **實驗前的準備工作**：  - 透過從第一原理出發建立系統模型，包括考慮平衡球和梁的動力學。  - 獲取系統的傳遞函數表示。  - 設計期望的控制響應，確保滿足時間域規格，如百分比超調、峰值時間和穩定時間。 \n 2. **平衡球和梁級聯控制設計**：  - 設計內環控制器：SRV02 PV位置控制器。  - 設計外環控制器，確保平衡球在梁上的位置受控並滿足規格要求。  - 考慮穩態誤差和積分器飽和問題。 \n 3. **實驗操作**：  - 進行位置控制的模擬，包括PD和PID控制器的仿真。  - 實施位置控制，設置Quarc相機塊參數。  - 分析使用PD和PID控制的階躍響應、斜坡響應和正弦響應。 \n 4. **結論**：  - 總結實驗結果，評估控制器性能。  - 探討實驗中遇到的挑戰和解決方案。 \n 以上是詳細重點摘要，涵蓋了實驗前的準備、控制設計、實驗操作和結論部分的關鍵內容。如需進一步了解任何部分，請隨時提出更具體的問題。 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n', 'tags': '', 'url': '與詳細重點摘要.html'}, {'title': '都靈理工大學', 'text': '由各組員在其個人的 cd2024 倉儲中, 以 LaTeX 格式分工完成下列文章的英文與中文翻譯並列資料, 最後在分組網站的 Release 或 downloads 區完成 2b-midbgx_report.pdf 的製作. \n 41123207 王騰甫分工: \xa0 2.pdf \n \n', 'tags': '', 'url': '都靈理工大學.html'}, {'title': '教學影片分組整理', 'text': '在影片上填上字幕, 另行上傳到可以嵌入到各分組的網站上 \n 41123207 王騰甫分工: \n cd2024 2b w4 利用 Gitpod 與個人 token 取得分組倉儲改版權限 13 \n cd2024 2b w5 指定影片加註任務 統整網誌以及配置 NX 可攜與 PC 執行規劃14 \n \n \n \n', 'tags': '', 'url': '教學影片分組整理.html'}, {'title': '教學影片分組整理逐字稿', 'text': '從影片字幕中整理出逐字稿, 放在影片下方, 以 .txt 連結安排 \n 41123207 王騰甫分工: \n cd2024 2b w4 利用 Gitpod 與個人 token 取得分組倉儲改版權限 13.txt \n cd2024 2b w5 指定影片加註任務 統整網誌以及配置 NX 可攜與 PC 執行規劃 14.txt \n \n \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': '教學影片分組整理逐字稿.html'}]};
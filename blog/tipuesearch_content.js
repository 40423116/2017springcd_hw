var tipuesearch = {"pages":[{"title":"About","tags":"misc","text":"2016Fallcadp_hw 個人作業網誌","url":"./pages/about/"},{"title":"2017springcd 第一週","tags":"2017springcd_hw","text":"個人作業簡報 組裝四連桿機構 fourbar from 40423116 on Vimeo .","url":"./2017springcd-di-yi-zhou.html"},{"title":"電腦輔助設計實習 課程總結","tags":"2016fallcadp_hw","text":"課程總結 四連桿運動路徑 四連桿運動路徑 from 40423116 on Vimeo . Solvespace 四連桿圖檔: 40423116.csv 40423116-w10-4.slvs 利用brython繪運動路徑 window.onload=function(){ brython(1); } from browser import document as doc from browser import html import math # 準備繪圖畫布 canvas = doc[\"fourbar\"] container1 = doc['container1'] ctx = canvas.getContext(\"2d\") fourbar_data = open(\"./../w10/40423116_W10.csv\").read() fourbar_list = fourbar_data.splitlines() #container1 <= fourbar_list[0] # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 利用 transform 將 y 座標反轉, 且 offset canvas.height # (X scale, X skew, Y skew, Y scale, X offset, Y offset) # 配合圖形位置進行座標轉換 ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100) # 畫出 x 與 y 座標線 # 各座標值放大 8 倍 ratio = 8 ''' ctx.moveTo(0, 0) ctx.lineTo(0, 100) ctx.moveTo(0, 0) ctx.lineTo(100, 0) ''' ctx.moveTo(0, 0) ctx.lineTo(-30*ratio, 0) start_point = fourbar_list[0].split(\",\") ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio) count = 0 for data in fourbar_list[1:]: point = data.split(\",\") #count = count + 1 #container1 <= str(count) + \":\" + point[0] + \",\" + point[1] #container1 <= html.BR() ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() Solvespace 1. Parts (零件繪製) 範例檔案: http://solvespace.com/bracket.pl An introductory tutorial is available, in which we draw the same part that is shown in the demo video. This covers most of the basic features of SolveSpace, including sketches, constraints, extrusions, and Boolean operations. When we first run SolveSpace, we will begin with an empty part. Initially, our view of the part will be oriented onto the XY plane; the label for that plane is displayed at the bottom left of the screen (#XY, in dark grey). The axes are also indicated by the three colored arrows at the bottom left; the X, Y, and Z axes are drawn in red, green, and blue respectively. When we hover the mouse over any entity, constraint, or other object in the sketch, that object will appear highlighted in yellow. For example, the XY plane, which is drawn as a dashed square, will appear highlighted when we hover the mouse over it. The YZ and ZX planes initially look like dashed lines, because they are being viewed on edge; but they still appear highlighted in yellow when we hold the mouse over them. It is similarly possible to highlight the X, Y, and Z axes (which are drawn as arrows), or the origin (which like all points is drawn as a green square). 簡易長出、除料、旋轉長料 2017 01 14 17 53 31 199 from 40423116 on Vimeo . Extrude (平行長出或除料) STL 格式 範例:平行長出 STL 格式 範例:除料 Lathe (旋轉繞行長出或除料) Export Triangle Mesh 練習零件繪製 練習零件繪製 from 40423116 on Vimeo . Solvespace 組合件繪圖 Solvespace 組合圖 組合教學 from 40423116 on Vimeo . Solvespace 3D列印機 自製 零件 Solvespace 3D列印機 組合圖 3D列印機 from 40423116 on Vimeo . Onshape 3D列印機組裝 3D印表機組裝p1:底部跟頂部組裝 3D印表機組裝p2:框架與控制器組裝 3D印表機組裝p3:滑軌的組裝 3D印表機組裝p4:噴頭座與連桿組裝 機械設計工程系-電腦輔助設計實習課程: cadpb_w16 影片","url":"./dian-nao-fu-zhu-she-ji-shi-xi-ke-cheng-zong-jie.html"},{"title":"40423116 12/22","tags":"2016fallcadp_hw","text":"W14 Onshape 3D列印機組裝 Onshape 3D列印機組裝","url":"./40423116-1222.html"},{"title":"40423116 12/15","tags":"2016fallcadp_hw","text":"W14 Solvespace 3D列印機組裝 Solvespace 零件 Solvespace 組合圖 3D列印機 from 40423116 on Vimeo .","url":"./40423116-1215.html"},{"title":"40423116 12/1","tags":"2016fallcadp_hw","text":"W12 Solvespace 組合件繪圖 Solvespace 組合件繪圖 Solvespace 組合圖","url":"./40423116-121.html"},{"title":"40423116_11/24","tags":"2016fallcadp_hw","text":"W11 Solvespace 1. Parts (零件繪製) 範例檔案: http://solvespace.com/bracket.pl An introductory tutorial is available, in which we draw the same part that is shown in the demo video. This covers most of the basic features of SolveSpace, including sketches, constraints, extrusions, and Boolean operations. When we first run SolveSpace, we will begin with an empty part. Initially, our view of the part will be oriented onto the XY plane; the label for that plane is displayed at the bottom left of the screen (#XY, in dark grey). The axes are also indicated by the three colored arrows at the bottom left; the X, Y, and Z axes are drawn in red, green, and blue respectively. When we hover the mouse over any entity, constraint, or other object in the sketch, that object will appear highlighted in yellow. For example, the XY plane, which is drawn as a dashed square, will appear highlighted when we hover the mouse over it. The YZ and ZX planes initially look like dashed lines, because they are being viewed on edge; but they still appear highlighted in yellow when we hold the mouse over them. It is similarly possible to highlight the X, Y, and Z axes (which are drawn as arrows), or the origin (which like all points is drawn as a green square). Extrude (平行長出或除料) STL 格式 範例:平行長出 STL 格式 範例:除料 Lathe (旋轉繞行長出或除料) Export Triangle Mesh STL 格式 three.js","url":"./40423116_1124.html"},{"title":"四連桿機構V2.","tags":"2016fallcadp_hw","text":"W10-4 四連桿機構V2. Solvespace 四連桿圖檔: 40423116.csv 40423116-w10-4.slvs 利用brython繪運動路徑 window.onload=function(){ brython(1); } from browser import document as doc from browser import html import math # 準備繪圖畫布 canvas = doc[\"fourbar\"] container1 = doc['container1'] ctx = canvas.getContext(\"2d\") fourbar_data = open(\"./../w10/40423116_W10.csv\").read() fourbar_list = fourbar_data.splitlines() #container1 <= fourbar_list[0] # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 利用 transform 將 y 座標反轉, 且 offset canvas.height # (X scale, X skew, Y skew, Y scale, X offset, Y offset) # 配合圖形位置進行座標轉換 ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100) # 畫出 x 與 y 座標線 # 各座標值放大 8 倍 ratio = 8 ''' ctx.moveTo(0, 0) ctx.lineTo(0, 100) ctx.moveTo(0, 0) ctx.lineTo(100, 0) ''' ctx.moveTo(0, 0) ctx.lineTo(-30*ratio, 0) start_point = fourbar_list[0].split(\",\") ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio) count = 0 for data in fourbar_list[1:]: point = data.split(\",\") #count = count + 1 #container1 <= str(count) + \":\" + point[0] + \",\" + point[1] #container1 <= html.BR() ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath()","url":"./si-lian-gan-ji-gou-v2.html"},{"title":"四連桿機構","tags":"2016fallcadp_hw","text":"Solvespace 四連桿機構 Solvespace 四連桿圖檔: 40423116.csv (請以滑鼠右鍵存檔) 40423116.slvs (請以滑鼠右鍵存檔)","url":"./si-lian-gan-ji-gou.html"},{"title":"Solvespace 零組件繪圖","tags":"2016fallcadp_hw","text":"Solvespace 零組件繪圖 練習零件繪製 練習零件繪製 from 40423116 on Vimeo .","url":"./solvespace-ling-zu-jian-hui-tu.html"},{"title":"40423116 作業簡報 上課wik","tags":"2016fallcadp_hw","text":"個人作業簡報 作業環境 ana2016fall_08.7z mini2016fall.7z 在小組倉儲中設定組員為子模組的流程: git clone 2016fallcadp_ag0 倉儲到近端 執行 git submodule add -b gh-pages https://github.com/name/組員倉儲 name 就可以將 組員 倉儲納入 g0 子目錄中, 且新增 .gitmodules 模組設定檔, 而且在 .git/config 與 .git/modules 目錄中新增子模組相關設定資料. git clone 後執行 git submodule init, 啟始子模組, 然後利用 git submodule update 取下子模組的對應版本資料 (對應版本紀錄在 .git/modules/g100/refs/heads/master 檔案中. 假如帶有子模組的倉儲管理者, 希望更新某一子模組的對應版本, 則必須先確定倉儲分支, 然後 cd 到子模組目錄中, 利用 git pull 後, 然後回到上層倉儲進行版本的提交推送. 假如希望拉回所有子模組的對應版本內容, 則使用 git pull origin gh-pages --recurse-submodules 假如希望將所有子模組的對應版本更新到目前最新提交, 使用 git submodule foreach \"(git checkout gh-pages; git pull)&\" 當利用上述指令完成更新子模組的對應版本之後, 必須進行提交推送, 將改版資料送到遠端, 之後則透過 git submodule update --init --recursive 將此對應版本的子模組取到近端, 其中因為子模組中還有子模組, 而此更新對這些新加入的子子模組並沒有 --init, 因此下子模組更新時, 要納入 --init 在近端, 取下某一倉儲的所有資料, 包括子模組與子模組下的子子模組等: git clone repos-url cd repos_dir git submodule update --init --recursive 或者直接 git clone --recursive repos-url","url":"./40423116-zuo-ye-jian-bao-shang-ke-wik.html"}]};
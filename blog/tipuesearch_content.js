var tipuesearch = {"pages":[{"text":"2016Fallcadp_hw 個人作業網誌","title":"About","tags":"misc","url":"./pages/about/"},{"text":"單一 2D 正齒輪繪圖到齒輪組嚙合 window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); } from browser import document as doc import math # deg 為角度轉為徑度的轉換因子 deg = math.pi/180. # 定義 Spur 類別 class Spur(object): def __init__(self, ctx): self.ctx = ctx def create_line(self, x1, y1, x2, y2, width=3, fill=\"red\"): self.ctx.beginPath() self.ctx.lineWidth = width self.ctx.moveTo(x1, y1) self.ctx.lineTo(x2, y2) self.ctx.strokeStyle = fill self.ctx.stroke() # # 定義一個繪正齒輪的繪圖函式 # midx 為齒輪圓心 x 座標 # midy 為齒輪圓心 y 座標 # rp 為節圓半徑, n 為齒數 # pa 為壓力角 (deg) # rot 為旋轉角 (deg) # 已經針對 n 大於等於 52 齒時的繪圖錯誤修正, 因為 base circle 與齒根圓大小必須進行判斷 def Gear(self, midx, midy, rp, n=20, pa=20, color=\"black\"): # 齒輪漸開線分成 15 線段繪製 imax = 15 # 在輸入的畫布上繪製直線, 由圓心到節圓 y 軸頂點畫一直線 self.create_line(midx, midy, midx, midy-rp) # 畫出 rp 圓, 畫圓函式尚未定義 #create_oval(midx-rp, midy-rp, midx+rp, midy+rp, width=2) # a 為模數 (代表公制中齒的大小), 模數為節圓直徑(稱為節徑)除以齒數 # 模數也就是齒冠大小 a=2*rp/n # d 為齒根大小, 為模數的 1.157 或 1.25倍, 這裡採 1.25 倍 d=2.5*rp/n # ra 為齒輪的外圍半徑 ra=rp+a # 畫出 ra 圓, 畫圓函式尚未定義 #create_oval(midx-ra, midy-ra, midx+ra, midy+ra, width=1) # rb 則為齒輪的基圓半徑 # 基圓為漸開線長齒之基準圓 rb=rp*math.cos(pa*deg) # 畫出 rb 圓 (基圓), 畫圓函式尚未定義 #create_oval(midx-rb, midy-rb, midx+rb, midy+rb, width=1) # rd 為齒根圓半徑 rd=rp-d # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd # 畫出 rd 圓 (齒根圓), 畫圓函式尚未定義 #create_oval(midx-rd, midy-rd, midx+rd, midy+rd, width=1) # dr 則為基圓到齒頂圓半徑分成 imax 段後的每段半徑增量大小 # 將圓弧分成 imax 段來繪製漸開線 # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: dr = (ra-rd)/imax else: dr=(ra-rb)/imax # tan(pa*deg)-pa*deg 為漸開線函數 sigma=math.pi/(2*n)+math.tan(pa*deg)-pa*deg for j in range(n): ang=-2.*j*math.pi/n+sigma ang2=2.*j*math.pi/n+sigma lxd=midx+rd*math.sin(ang2-2.*math.pi/n) lyd=midy-rd*math.cos(ang2-2.*math.pi/n) for i in range(imax+1): # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: r=rd+i*dr else: r=rb+i*dr theta=math.sqrt((r*r)/(rb*rb)-1.) alpha=theta-math.atan(theta) xpt=r*math.sin(alpha-ang) ypt=r*math.cos(alpha-ang) xd=rd*math.sin(-ang) yd=rd*math.cos(-ang) # i=0 時, 繪線起點由齒根圓上的點, 作為起點 if(i==0): last_x = midx+xd last_y = midy-yd # 由左側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點 self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color) # 最後一點, 則為齒頂圓 if(i==imax): lfx=midx+xpt lfy=midy-ypt last_x = midx+xpt last_y = midy-ypt # the line from last end of dedendum point to the recent # end of dedendum point # lxd 為齒根圓上的左側 x 座標, lyd 則為 y 座標 # 下列為齒根圓上用來近似圓弧的直線 self.create_line((lxd),(lyd),(midx+xd),(midy-yd),fill=color) for i in range(imax+1): # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: r=rd+i*dr else: r=rb+i*dr theta=math.sqrt((r*r)/(rb*rb)-1.) alpha=theta-math.atan(theta) xpt=r*math.sin(ang2-alpha) ypt=r*math.cos(ang2-alpha) xd=rd*math.sin(ang2) yd=rd*math.cos(ang2) # i=0 時, 繪線起點由齒根圓上的點, 作為起點 if(i==0): last_x = midx+xd last_y = midy-yd # 由右側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點 self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color) # 最後一點, 則為齒頂圓 if(i==imax): rfx=midx+xpt rfy=midy-ypt last_x = midx+xpt last_y = midy-ypt # lfx 為齒頂圓上的左側 x 座標, lfy 則為 y 座標 # 下列為齒頂圓上用來近似圓弧的直線 self.create_line(lfx,lfy,rfx,rfy,fill=color) canvas = doc['onegear'] ctx = canvas.getContext(\"2d\") x = (canvas.width)/2 y = (canvas.height)/2 r = 0.8*(canvas.height/2) # 齒數 n = 53 # 壓力角 pa = 20 Spur(ctx).Gear(x, y, r, n, pa, \"blue\") # 以下列出 W11 2B 未出席人數 data = open(\"./../data/w11/2b0503.txt\", encoding=\"utf-8\").read() count = 0 # 去掉前面兩列 student = data.split(\"\\n\")[2:] for i in range(len(student)): each = student[i].split(\"\\t\") if each[1] != \"出席\": count = count + 1 #print(count) div = doc[\"onegear_div\"] div <= \"2b: \" + str(count) + \"/\" + str(len(student)) # 將 導入的 document 設為 doc 主要原因在於與舊程式碼相容 from browser import document as doc # 由於 Python3 與 Javascript 程式碼已經不再混用, 因此來自 Javascript 的變數, 必須居中透過 window 物件轉換 from browser import window import math # 主要用來取得畫布大小 canvas = doc[\"cango_gear\"] # 此程式採用 Cango Javascript 程式庫繪圖, 因此無需 ctx #ctx = canvas.getContext(\"2d\") cango = window.Cango.new # 針對變數的轉換, shapeDefs 在 Cango 中資料型別為變數, 可以透過 window 轉換 shapedefs = window.shapeDefs # 目前 Cango 結合 Animation 在 Brython 尚無法運作, 此刻只能繪製靜態圖形 # in CangoAnimation.js #interpolate1 = window.interpolate # Cobi 與 createGearTooth 都是 Cango Javascript 程式庫中的物件 cobj = window.Cobj.new creategeartooth = window.createGearTooth.new # 經由 Cango 轉換成 Brython 的 cango, 指定將圖畫在 id=\"cango_gear\" 的 canvas 上 cgo = cango(\"cango_gear\") ###################################### # 畫正齒輪輪廓 ##################################### # n 為齒數 n = 17 # pa 為壓力角 pa = 25 # m 為模數, 根據畫布的寬度, 計算適合的模數大小 # Module = mm of pitch diameter per tooth m = 0.8*canvas.width/n # pr 為節圓半徑 pr = n*m/2 # gear Pitch radius # generate gear data = creategeartooth(m, n, pa) # Brython 程式中的 print 會將資料印在 Browser 的 console 區 #print(data) gearTooth = cobj(data, \"SHAPE\", { \"fillColor\":\"#ddd0dd\", \"border\": True, \"strokeColor\": \"#606060\" }) gearTooth.rotate(180/n) # rotate gear 1/2 tooth to mesh # 單齒的齒形資料經過旋轉後, 將資料複製到 gear 物件中 gear = gearTooth.dup() # gear 為單一齒的輪廓資料 #cgo.render(gearTooth) # 利用單齒輪廓旋轉, 產生整個正齒輪外形 for i in range(1, n): # 將 gearTooth 中的資料複製到 newTooth newTooth = gearTooth.dup() # 配合迴圈, newTooth 的齒形資料進行旋轉, 然後利用 appendPath 方法, 將資料併入 gear newTooth.rotate(360*i/n) # appendPath 為 Cango 程式庫中的方法, 第二個變數為 True, 表示要刪除最前頭的 Move to SVG Path 標註符號 gear.appendPath(newTooth, True) # trim move command = True # 建立軸孔 # add axle hole, hr 為 hole radius hr = 0.6*pr # diameter of gear shaft shaft = cobj(shapedefs.circle(hr), \"PATH\") shaft.revWinding() gear.appendPath(shaft) # retain the 'moveTo' command for shaft sub path cx = canvas.width/2 cy = canvas.height/2 gear.translate(cx, cy) # render 繪出靜態正齒輪輪廓 cgo.render(gear)","title":"2017springcd_hw 第十一週","tags":"2017springcd_hw","url":"./2017springcd_hw-di-shi-yi-zhou.html"},{"text":"python 運算加減乘除 python 運算加減乘除 虎尾科技大學機械設計系 40423116李冠辰 python加減乘除 from 40423116 on Vimeo . window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); } from browser import document as doc from browser import html import math container = doc['container'] degree = math.pi/180 def button1(event): a = input(\"give me a\") b = input(\"give me b\") container <= str(float(a)+float(b)) doc[\"button1\"].bind(\"click\", button1) 按下取 a b 值","title":"2017springcd_hw 第十週","tags":"2017springcd_hw","url":"./2017springcd_hw-di-shi-zhou.html"},{"text":"期中考報告 (一) Fossil Server 實習查驗 ag3 (二) 四連桿機構協同 Trace Point 查驗 40423116 (三) Fourbar Walker OnShape 零件協同繪圖與組立查驗 製作 虎尾科技大學 機械設計系 40423116 李冠辰_期中報告01 from 40423116 on Vimeo . 組裝 虎尾科技大學 機械設計系 40423116 李冠辰_期中報告02 from 40423116 on Vimeo . (四) 分組協同零件展示 4.零件展示 window.onload = function(){ var madeleine = new Madeleine({ target: 'target', // target div id data: './../data/40423116.stl', // data path path: './../data/madeleine/src/' // path to source directory from current html file }); }; select stl file: or drop stl file","title":"協同產品設計實習 ag3期中考報告","tags":"2017springcd_hw","url":"./xie-tong-chan-pin-she-ji-shi-xi-ag3qi-zhong-kao-bao-gao.html"},{"text":"四連桿機構協同 Trace Point 查驗 四連桿機構Trace Point查驗 虎尾科技大學 機械設計系 40423116 李冠辰_期中報告03 from 40423116 on Vimeo . window.onload=function(){ brython(1); } from browser import document as doc from browser import html import math # 準備繪圖畫布 canvas = doc[\"fourbar\"] container1 = doc['container1'] ctx = canvas.getContext(\"2d\") fourbar_data = open(\"./../2017springcd/midterm2.csv\").read() fourbar_list = fourbar_data.splitlines() #container1 <= fourbar_list[0] # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 利用 transform 將 y 座標反轉, 且 offset canvas.height # (X scale, X skew, Y skew, Y scale, X offset, Y offset) # 配合圖形位置進行座標轉換 ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100) # 畫出 x 與 y 座標線 # 各座標值放大 8 倍 ratio = 8 ctx.moveTo(0, 0) ctx.lineTo(-30*ratio, 0) start_point = fourbar_list[0].split(\",\") ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio) count = 0 for data in fourbar_list[1:]: point = data.split(\",\") #count = count + 1 #container1 <= str(count) + \":\" + point[0] + \",\" + point[1] #container1 <= html.BR() ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath()","title":"四連桿機構協同 Trace Point 查驗","tags":"2017springcd_hw","url":"./si-lian-gan-ji-gou-xie-tong-trace-point-cha-yan.html"},{"text":"vrep運動模擬及設定 四連桿導入vrep運動模擬及設定 虎尾科技大學 機械設計系 40423116 李冠辰 from 40423116 on Vimeo . 八連桿導入vrep運動模擬及設定 虎尾科技大學 機械設計系 40423116 李冠辰 八連桿模擬運動及設定 from 40423116 on Vimeo .","title":"2017springcd_hw 第六週","tags":"2017springcd_hw","url":"./2017springcd_hw-di-liu-zhou.html"},{"text":"單連桿轉入 V-rep 進行運動模擬 介紹Wiki編輯模式的種類(Fossil Wiki、Markdown、Html) Solcespace 單連桿轉入 V-rep 進行運動模擬 影片:轉入 V-rep 設定跟運動模擬 虎尾科技大學 機械設計系 40423116 李冠辰 單連趕模擬運動及設定 from 40423116 on Vimeo .","title":"2017springcd_hw 第五週","tags":"2017springcd_hw","url":"./2017springcd_hw-di-wu-zhou.html"},{"text":"建立小組fossil倉儲並新增組員 fossil倉儲第三組 fossil編寫程式用sql 1 fossil sql -R vcp.fossil 1 ipconfig /all 設定proxy-->進入foss倉儲網頁 Fossil SCM 與 Stunnel 啟動整合 3/16新增以 chrome 連線到 https://%NetworkIP%:443 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 REM tiny2017 主要針對初學 Python3 與 C 學員所建立 REM 近端使用 fossil 管理資料版本 , 並且定時轉為 git 格式後上傳到 github @ echo off REM 設定 y 硬碟代號與 data 目錄對應 set Disk = y subst % Disk %: \"data\" REM 設定 leo 相關對應 Home 位置 set HomePath =% Disk %: \\ home set HomeDrive =% Disk %: \\ home set Home =% Disk %: \\ home REM 將系統 Python 程式的 io 設為 utf-8 set PYTHONIOENCODING = \"utf-8\" REM 將後續的指令執行 , 以 % Disk % 為主 % Disk %: REM 設定 PYTHONPATH set PYTHONPATH =% Disk %: \\ python-3 . 5 . 3-embed-amd64 REM 設定 Leo 所用的編輯器 set LEO_EDITOR =% Disk %: \\ wscite \\ SciTE . exe REM for fossil https 連線設定 set HTTPS = on REM 指令搜尋路徑設定 set path1 =% PATH % ; % Disk %:;% Disk %: \\ python-3 . 5 . 3-embed-amd64 ;% Disk %: \\ git \\ bin ;% Disk %: \\ stunnel \\ bin ;% Disk %: \\ sqlite-tools ;% Disk %: \\ python-3 . 5 . 3-embed-amd64 \\ Scripts ;% Disk %: \\ portablegit \\ bin ; set path2 = c : \\ Windows \\ Microsoft . NET \\ Framework \\ v3 . 5 ;% Disk %: \\ python-3 . 5 . 3-embed-amd64 \\ Lib \\ site-packages ; path =% path %;% path1 %;% path2 % start / MIN % Disk %: \\ wscite \\ SciTE . exe start / MIN cmd . exe start / MIN cmd . exe start / MIN cmd . exe REM 啟動 Leo 編輯器 REM % Disk %: \\ Miniconda3 \\ python . exe % Disk %: \\ apps \\ launchLeo . py REM 啟動 stunnel start / MIN fossil . exe server -P 127 . 0 . 0 . 1 : 8080 % Disk %: \\ tmp \\ fossil_repo REM 取得電腦 IP , 然後設定 % Disk %:/ stunnel / config / stunnel . conf for / f \"delims= [] tokens=2\" %% a in ( ' ping -4 -n 1 % ComputerName % &#94;| findstr [ ') do set NetworkIP=%%a REM echo Network IP: %NetworkIP% REM Saved in %Disk%:\\stunnel\\config\\stunnel.conf @echo off REM 建立 stunnel.conf @echo [https] > %Disk%:\\stunnel\\config\\stunnel.conf REM 附加資料 @echo accept = %NetworkIP%:443 >> %Disk%:\\stunnel\\config\\stunnel.conf @echo connect = 127.0.0.1:8080 >> %Disk%:\\stunnel\\config\\stunnel.conf @echo TIMEOUTclose = 0 >> %Disk%:\\stunnel\\config\\stunnel.conf @echo cert = %Disk%:\\stunnel\\config\\localhost.crt >> %Disk%:\\stunnel\\config\\stunnel.conf @echo key = %Disk%:\\stunnel\\config\\localhost.key >> %Disk%:\\stunnel\\config\\stunnel.conf REM 啟動 stunnel start /MIN stunnel.exe Exit","title":"2017springcd_hw 第四週","tags":"2017springcd_hw","url":"./2017springcd_hw-di-si-zhou.html"},{"text":"建立fossil倉儲 建立fossil倉儲 建立fossil倉儲 from 40423116 on Vimeo .","title":"2017springcd_hw 第三週","tags":"2017springcd_hw","url":"./2017springcd_hw-di-san-zhou.html"},{"text":"多連桿運動路徑 多連桿組立 組合多連桿 from 40423116 on Vimeo . bar01 from 40423116 on Vimeo . bar02 from 40423116 on Vimeo . bar03-07 from 40423116 on Vimeo . bar08 from 40423116 on Vimeo .","title":"2017springcd_hw 第二週","tags":"2017springcd_hw","url":"./2017springcd_hw-di-er-zhou.html"},{"text":"個人作業簡報 組裝四連桿機構 fourbar from 40423116 on Vimeo .","title":"2017springcd_hw 第一週","tags":"2017springcd_hw","url":"./2017springcd_hw-di-yi-zhou.html"},{"text":"課程總結 四連桿運動路徑 四連桿運動路徑 from 40423116 on Vimeo . Solvespace 四連桿圖檔: 40423116.csv 40423116-w10-4.slvs 利用brython繪運動路徑 window.onload=function(){ brython(1); } from browser import document as doc from browser import html import math # 準備繪圖畫布 canvas = doc[\"fourbar\"] container1 = doc['container1'] ctx = canvas.getContext(\"2d\") fourbar_data = open(\"./../w10/40423116_W10.csv\").read() fourbar_list = fourbar_data.splitlines() #container1 <= fourbar_list[0] # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 利用 transform 將 y 座標反轉, 且 offset canvas.height # (X scale, X skew, Y skew, Y scale, X offset, Y offset) # 配合圖形位置進行座標轉換 ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100) # 畫出 x 與 y 座標線 # 各座標值放大 8 倍 ratio = 8 ''' ctx.moveTo(0, 0) ctx.lineTo(0, 100) ctx.moveTo(0, 0) ctx.lineTo(100, 0) ''' ctx.moveTo(0, 0) ctx.lineTo(-30*ratio, 0) start_point = fourbar_list[0].split(\",\") ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio) count = 0 for data in fourbar_list[1:]: point = data.split(\",\") #count = count + 1 #container1 <= str(count) + \":\" + point[0] + \",\" + point[1] #container1 <= html.BR() ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() Solvespace 1. Parts (零件繪製) 範例檔案: http://solvespace.com/bracket.pl An introductory tutorial is available, in which we draw the same part that is shown in the demo video. This covers most of the basic features of SolveSpace, including sketches, constraints, extrusions, and Boolean operations. When we first run SolveSpace, we will begin with an empty part. Initially, our view of the part will be oriented onto the XY plane; the label for that plane is displayed at the bottom left of the screen (#XY, in dark grey). The axes are also indicated by the three colored arrows at the bottom left; the X, Y, and Z axes are drawn in red, green, and blue respectively. When we hover the mouse over any entity, constraint, or other object in the sketch, that object will appear highlighted in yellow. For example, the XY plane, which is drawn as a dashed square, will appear highlighted when we hover the mouse over it. The YZ and ZX planes initially look like dashed lines, because they are being viewed on edge; but they still appear highlighted in yellow when we hold the mouse over them. It is similarly possible to highlight the X, Y, and Z axes (which are drawn as arrows), or the origin (which like all points is drawn as a green square). 簡易長出、除料、旋轉長料 2017 01 14 17 53 31 199 from 40423116 on Vimeo . Extrude (平行長出或除料) STL 格式 範例:平行長出 STL 格式 範例:除料 Lathe (旋轉繞行長出或除料) Export Triangle Mesh 練習零件繪製 練習零件繪製 from 40423116 on Vimeo . Solvespace 組合件繪圖 Solvespace 組合圖 組合教學 from 40423116 on Vimeo . Solvespace 3D列印機 自製 零件 Solvespace 3D列印機 組合圖 3D列印機 from 40423116 on Vimeo . Onshape 3D列印機組裝 3D印表機組裝p1:底部跟頂部組裝 3D印表機組裝p2:框架與控制器組裝 3D印表機組裝p3:滑軌的組裝 3D印表機組裝p4:噴頭座與連桿組裝 機械設計工程系-電腦輔助設計實習課程: cadpb_w16 影片","title":"電腦輔助設計實習 課程總結","tags":"2016fallcadp_hw","url":"./dian-nao-fu-zhu-she-ji-shi-xi-ke-cheng-zong-jie.html"},{"text":"W14 Onshape 3D列印機組裝 Onshape 3D列印機組裝","title":"40423116 12/22","tags":"2016fallcadp_hw","url":"./40423116-1222.html"},{"text":"W14 Solvespace 3D列印機組裝 Solvespace 零件 Solvespace 組合圖 3D列印機 from 40423116 on Vimeo .","title":"40423116 12/15","tags":"2016fallcadp_hw","url":"./40423116-1215.html"},{"text":"W12 Solvespace 組合件繪圖 Solvespace 組合件繪圖 Solvespace 組合圖","title":"40423116 12/1","tags":"2016fallcadp_hw","url":"./40423116-121.html"},{"text":"W11 Solvespace 1. Parts (零件繪製) 範例檔案: http://solvespace.com/bracket.pl An introductory tutorial is available, in which we draw the same part that is shown in the demo video. This covers most of the basic features of SolveSpace, including sketches, constraints, extrusions, and Boolean operations. When we first run SolveSpace, we will begin with an empty part. Initially, our view of the part will be oriented onto the XY plane; the label for that plane is displayed at the bottom left of the screen (#XY, in dark grey). The axes are also indicated by the three colored arrows at the bottom left; the X, Y, and Z axes are drawn in red, green, and blue respectively. When we hover the mouse over any entity, constraint, or other object in the sketch, that object will appear highlighted in yellow. For example, the XY plane, which is drawn as a dashed square, will appear highlighted when we hover the mouse over it. The YZ and ZX planes initially look like dashed lines, because they are being viewed on edge; but they still appear highlighted in yellow when we hold the mouse over them. It is similarly possible to highlight the X, Y, and Z axes (which are drawn as arrows), or the origin (which like all points is drawn as a green square). Extrude (平行長出或除料) STL 格式 範例:平行長出 STL 格式 範例:除料 Lathe (旋轉繞行長出或除料) Export Triangle Mesh STL 格式 three.js","title":"40423116_11/24","tags":"2016fallcadp_hw","url":"./40423116_1124.html"},{"text":"W10-4 四連桿機構V2. Solvespace 四連桿圖檔: 40423116.csv 40423116-w10-4.slvs 利用brython繪運動路徑 window.onload=function(){ brython(1); } from browser import document as doc from browser import html import math # 準備繪圖畫布 canvas = doc[\"fourbar\"] container1 = doc['container1'] ctx = canvas.getContext(\"2d\") fourbar_data = open(\"./../w10/40423116_W10.csv\").read() fourbar_list = fourbar_data.splitlines() #container1 <= fourbar_list[0] # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 利用 transform 將 y 座標反轉, 且 offset canvas.height # (X scale, X skew, Y skew, Y scale, X offset, Y offset) # 配合圖形位置進行座標轉換 ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100) # 畫出 x 與 y 座標線 # 各座標值放大 8 倍 ratio = 8 ''' ctx.moveTo(0, 0) ctx.lineTo(0, 100) ctx.moveTo(0, 0) ctx.lineTo(100, 0) ''' ctx.moveTo(0, 0) ctx.lineTo(-30*ratio, 0) start_point = fourbar_list[0].split(\",\") ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio) count = 0 for data in fourbar_list[1:]: point = data.split(\",\") #count = count + 1 #container1 <= str(count) + \":\" + point[0] + \",\" + point[1] #container1 <= html.BR() ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath()","title":"四連桿機構V2.","tags":"2016fallcadp_hw","url":"./si-lian-gan-ji-gou-v2.html"},{"text":"Solvespace 四連桿機構 Solvespace 四連桿圖檔: 40423116.csv (請以滑鼠右鍵存檔) 40423116.slvs (請以滑鼠右鍵存檔)","title":"四連桿機構","tags":"2016fallcadp_hw","url":"./si-lian-gan-ji-gou.html"},{"text":"Solvespace 零組件繪圖 練習零件繪製 練習零件繪製 from 40423116 on Vimeo .","title":"Solvespace 零組件繪圖","tags":"2016fallcadp_hw","url":"./solvespace-ling-zu-jian-hui-tu.html"},{"text":"個人作業簡報 作業環境 ana2016fall_08.7z mini2016fall.7z 在小組倉儲中設定組員為子模組的流程: git clone 2016fallcadp_ag0 倉儲到近端 執行 git submodule add -b gh-pages https://github.com/name/組員倉儲 name 就可以將 組員 倉儲納入 g0 子目錄中, 且新增 .gitmodules 模組設定檔, 而且在 .git/config 與 .git/modules 目錄中新增子模組相關設定資料. git clone 後執行 git submodule init, 啟始子模組, 然後利用 git submodule update 取下子模組的對應版本資料 (對應版本紀錄在 .git/modules/g100/refs/heads/master 檔案中. 假如帶有子模組的倉儲管理者, 希望更新某一子模組的對應版本, 則必須先確定倉儲分支, 然後 cd 到子模組目錄中, 利用 git pull 後, 然後回到上層倉儲進行版本的提交推送. 假如希望拉回所有子模組的對應版本內容, 則使用 git pull origin gh-pages --recurse-submodules 假如希望將所有子模組的對應版本更新到目前最新提交, 使用 git submodule foreach \"(git checkout gh-pages; git pull)&\" 當利用上述指令完成更新子模組的對應版本之後, 必須進行提交推送, 將改版資料送到遠端, 之後則透過 git submodule update --init --recursive 將此對應版本的子模組取到近端, 其中因為子模組中還有子模組, 而此更新對這些新加入的子子模組並沒有 --init, 因此下子模組更新時, 要納入 --init 在近端, 取下某一倉儲的所有資料, 包括子模組與子模組下的子子模組等: git clone repos-url cd repos_dir git submodule update --init --recursive 或者直接 git clone --recursive repos-url","title":"40423116 作業簡報 上課wik","tags":"2016fallcadp_hw","url":"./40423116-zuo-ye-jian-bao-shang-ke-wik.html"}]};
function makeGameAll(){

    console.log('Create Game');

    var gameArea = $('#game_outer');
    var answer = $("#answer");
    var data = {
        correctAnswer : [
            "B" ,null, null, null, null, null, null, null, "T" , "C" , null, null, "S" , "F" , "X" , null,
            "I" ,null, null, null, "C" , null, null, null, "E" , "Y" , null, "T" , null, "B" , null, null,
            "O" ,"A" , "D" , "D" , "R" , "E" , "S" , "S" , "A" , "B" , "L" , "E" , null, "I" , "D" , null,
            "S" ,"M" , null, null, "O" , "N" , "C" , "A" , "M" , "E" , "R" , "A" , null, null, "T" , null,
            "F" ,"D" , null, "P" , "S" , null, "S" , "U" , "P" , "R" , "E" , "M" , "E" , "F" , "X" , null,
            "L" ,"3" , null, "I" , "S" , null, null, null, "O" , "T" , null, "E" , "T" , "L" , null, "W" ,
            "A" ,"0" , null, "K" , "C" , null, null, "G" , "W" , "E" , null, "D" , "H" , "E" , null, "I" ,
            "S" ,"0" , null, "A" , "H" , null, null, "E" , "E" , "X" , null, null, "N" , "X" , null, "R" ,
            "H" ,"0" , null, "C" , "I" , "I" , null, "E" , "R" , "T" , null, null, "O" , "K" , null, "E" ,
            "B" ,null, null, "H" , "L" , "M" , null, "K" , "S" , null, null, null, "L" , "E" , null, "L" ,
            "A" ,null, "S" , "U" , "L" , "P" , "H" , "A" , "T" , "E" , "S" , null, "E" , "Y" , null, "E" , 
            "C" ,null, "I" , null, null, "A" , "U" , "R" , "A" , "S" , "Y" , "N" , "C" , null, null, "S" ,
            "K" ,null, "N" , "F" , null, "C" , "O" , "A" , "G" , "U" , "L" , "A" , "T" , "O" , "R" , "S" ,
            null,null, null, "O" , "P" , "T" , "I" , "M" , "E" , "M" , null, null, "S" , null, null, null,
            null,null, "N" , "E" , "O" , null, null, "A" , "S" , null, null, "R" , "Y" , "Z" , "E" , "N" ,
            null,null, null, null, null, null, null, null, null, null, null, null, null, null, null, null
        ],
        groupData : {
            horizontal : [
                { col : 13, row : 1, length : 3},
                { col : 2, row : 3, length : 11 },
                { col : 14, row : 3, length : 2 },
                { col : 5, row : 4, length : 8 },
                { col : 7, row : 5, length : 9 },
                { col : 3, row : 11, length : 9 },
                { col : 6, row : 12, length : 8 },
                { col : 6, row : 13, length : 11 },
                { col : 4, row : 14, length : 7 },
                { col : 3, row : 15, length : 3 },
                { col : 12, row : 15, length : 5}
            ],
            vertical : [
                { col : 1, row : 1, length : 13 },
                { col : 9, row : 1, length : 15 },
                { col : 10, row : 1, length : 9 },
                { col : 14, row : 1, length : 3 },
                { col : 5, row : 2, length : 10 },
                { col : 12, row : 2, length : 6 },
                { col : 2, row : 3, length : 7 },
                { col : 15, row : 3, length : 3 },
                { col : 4, row : 5, length : 7},
                { col : 13, row : 5, length : 10},
                { col : 14, row : 5, length : 7},
                { col : 16, row : 6, length : 8},
                { col : 8, row : 7, length : 9},
                { col : 6, row : 9, length : 6},
                { col : 3, row : 11, length : 3},
                { col : 4, row : 13, length : 3}
            ]
        },
        userAnswer : [
            null,null,null,null,null,null,null,null,null,null,null,null,"S" ,"F" ,"X" ,null,
            null,null,null,null,null,null,null,null,null,null,null,null,null,"B" ,null,null,
            null,"A" ,null,null,null,null,null,null,null,null,null,null,null,"I" ,"D" ,null,
            null,"M" ,null,null,"O" ,"N" ,"C" ,"A" ,"M" ,"E" ,"R" ,"A" ,null,null,null,null,
            null,"D" ,null,"P" ,null,null,null,null,null,null,null,null,"E" ,null,null,null,
            null,"3" ,null,"I" ,null,null,null,null,null,null,null,null,"T" ,null,null,null,
            null,"0" ,null,"K" ,null,null,null,"G" ,null,null,null,null,"H" ,null,null,null,
            null,"0" ,null,"A" ,null,null,null,"E" ,null,null,null,null,"N" ,null,null,null,
            null,"0" ,null,"C" ,null,null,null,"E" ,null,null,null,null,"O" ,null,null,null,
            null,null,null,"H" ,null,null,null,"K" ,null,null,null,null,"L" ,null,null,null,
            null,null,"S" ,"U" ,"L" ,"P" ,"H" ,"A" ,"T" ,"E" ,"S" ,null,"E" ,null,null,null,
            null,null,"I" ,null,null,null,null,"R" ,null,null,null,null,"C" ,null,null,null,
            null,null,"N" ,"F" ,null,"C" ,"O" ,"A" ,"G" ,"U" ,"L" ,"A" ,"T" ,"O" ,"R" ,"S" ,
            null,null,null,"O" ,null,null,null,"M" ,null,null,null,null,"S" ,null,null,null,
            null,null,null,"E" ,null,null,null,"A" ,null,null,null,"R" ,"Y" ,"Z" ,"E" ,"N" ,
            null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null
        ],
        userCurrent : 0,
        userCurrentCol : 0,
        userCurrentRow : 0,
        activeNow : "",
        ifHorizontal: null,
        ifVertical: null,
        ifAllCorrect : false
    }

    // ===============================
    // create view
    // ===============================
    function createAll(horizontal, vertical, basisData){
        var allCol = '',
            col = '<div class="col"><p></p></div>',
            disableCol = '<div class="col disable"><p></p></div>';

        for(i=0; i<horizontal*vertical; i++){
            if(basisData[i] == null){ allCol += disableCol;}
            else{ allCol += col; }
            // 使用者填答預設全部填null
            // data.userAnswer.push(null);
        }
        gameArea.html(allCol);
    }

    function fillNum(horizontal, vertical){
        for(n=0; n<horizontal*vertical; n++){
            var nInedx = n + 1;
            if(nInedx%16 != 0){ var nCol= nInedx%16; }
            else{ var nCol = 16; }
            var nRow = Math.ceil(nInedx/16);
            var nArr = [nCol, nRow];

            for(i=0; i<data.groupData.horizontal.length; i++){
                var dataArr = [data.groupData.horizontal[i].col, data.groupData.horizontal[i].row];
                if(nArr[1] == dataArr[1] && nArr[0] == dataArr[0]){
                    $('.col').eq(n).append('<span>'+(i+1)+'</sapn>');
                }
            }
            for(g=0; g<data.groupData.vertical.length; g++){
                var dataArr = [data.groupData.vertical[g].col, data.groupData.vertical[g].row];
                if(nArr[1] == dataArr[1] && nArr[0] == dataArr[0]){
                    $('.col').eq(n).append('<span>'+(g+1)+'</sapn>');
                }
            }
        }
    }

    function fillDefault(horizontal, vertical, defaultData){
        for(i=0; i<horizontal*vertical; i++){
            if(defaultData[i] == null){ }
            else{ $('.col').eq(i).find('p').text(defaultData[i]); }
        }
    }

    createAll(16, 16, data.correctAnswer);
    fillNum(16, 16);
    fillDefault(16, 16, data.userAnswer);
    checkHorizontal();
    checkVertical();
    checkAnswer();

    // ===============================
    // fill all correct answer (check)
    // ===============================

    function fillCorrect(){
        data.userAnswer=[];
        for(i=0; i<data.correctAnswer.length; i++){
            data.userAnswer.push(data.correctAnswer[i]);
            if(data.correctAnswer[i] != null){ $('.col').eq(i).find('p').text(data.correctAnswer[i]); }
            else{ continue; }
        }
        checkHorizontal();
        checkVertical();
        checkAnswer();
    }
    // fillCorrect();


    // ===============================
    // 更新狀態
    // ===============================
    function updateCurrent(index){
        data.userCurrent = index + 1;
        if(data.userCurrent%16 != 0){ data.userCurrentCol = data.userCurrent%16; }
        else{ data.userCurrentCol = 16; }
        data.userCurrentRow = Math.ceil(data.userCurrent/16);
        
        console.log("目前觸發 index : "+data.userCurrent, "col : "+data.userCurrentCol, "row : "+data.userCurrentRow);
    }

    function updateHorizontal(){
        var allLength = data.groupData.horizontal.length;
        data.ifHorizontal = null;
        for(i=0; i<allLength; i++){
            var r = data.groupData.horizontal[i].row;
            var c = data.groupData.horizontal[i].col;
            var l = data.groupData.horizontal[i].length;
            
            if(data.userCurrentRow == r
            && data.userCurrentCol >= c 
            && data.userCurrentCol <= c + l - 1){

                data.ifHorizontal = i;
                // console.log( "符合橫向第 " + data.ifHorizontal + " 題" );
                // console.log( "col : " + c, "row : " + r, "length : " + l);
            }
        }
    }

    function updateVertical(){
        var allLength = data.groupData.vertical.length;
        data.ifVertical = null;
        for(i=0; i<allLength; i++){
            var r = data.groupData.vertical[i].row;
            var c = data.groupData.vertical[i].col;
            var l = data.groupData.vertical[i].length;
            
            if(data.userCurrentCol == c
            && data.userCurrentRow >= r
            && data.userCurrentRow <= r + l - 1){

                data.ifVertical = i;
                // console.log( "符合直向第 " + data.ifVertical + " 題" );
                // console.log( "col : " + c, "row : " + r, "length : " + l);
            }
        }
    }

    function updatePath(ifsame){
        console.log("符合橫向第 " + data.ifHorizontal + " 題");
        console.log("符合直向第 " + data.ifVertical + " 題" );
        console.log('目前方向: '+data.activeNow);
        switch (ifsame) {
            case false:
                console.log('按再同一格?:'+ifsame);
                if(data.ifHorizontal != null){
                    data.activeNow = 'h'
                }else if(data.ifVertical != null){
                    data.activeNow = 'v'
                }else{
                    data.activeNow = ''
                }
                break;
            case true:
                console.log('按再同一格?:'+ifsame);
                if(data.ifHorizontal != null && data.ifVertical != null){
                    if(data.activeNow == 'v'){
                        data.activeNow = 'h'
                    }else{
                        data.activeNow = 'v'
                    }
                }
                break;
            case 'fixed_Horizontal' :
                data.activeNow = 'h'
                break;
            case 'fixed_Vertical' :
                data.activeNow = 'v'
                break;
        }
        console.log('轉變方向為:'+data.activeNow);
    }

    function clickOnList(index, path){
        updateCurrent(index);
        updateHorizontal();
        updateVertical();
        updatePath(path);
    }

    function updateAll(index){
        if(data.userCurrent != index + 1){
            updateCurrent(index);
            updateHorizontal();
            updateVertical();
            updatePath(false);
        }else{
            updateCurrent(index);
            updateHorizontal();
            updateVertical();
            updatePath(true);
        }
    }

    // ===============================
    // 改變畫面
    // ===============================
    function resetActiveAll(){
        $('.col').removeClass('active');
        $('.col').removeClass('group');
    }

    function fillHorizontal(index){
        var r = data.groupData.horizontal[data.ifHorizontal].row;
        var c = data.groupData.horizontal[data.ifHorizontal].col;
        var l = data.groupData.horizontal[data.ifHorizontal].length;

        for(f=0; f<data.correctAnswer.length; f++){

            if(f%16 != 0){ var cc = f%16; }
            else{ var cc = 16; }
            var rr = Math.ceil(f/16);

            if(rr == r
            && cc >= c 
            && cc <= c + l - 1){
                $('.col').eq(f-1).addClass('group');
            }
            $('.col').eq(index).addClass('active');
        }
    }

    function fillVertical(index){
        var r = data.groupData.vertical[data.ifVertical].row;
        var c = data.groupData.vertical[data.ifVertical].col;
        var l = data.groupData.vertical[data.ifVertical].length;

        for(f=0; f<data.correctAnswer.length; f++){

            if(f%16 != 0){ var cc = f%16; }
            else{ var cc = 16; }
            var rr = Math.ceil(f/16);

            if(cc == c
            && rr >= r 
            && rr <= r + l - 1){
                $('.col').eq(f-1).addClass('group');
            }
            $('.col').eq(index).addClass('active');
        }
    }

    function fillActive(index){
        resetActiveAll();
        switch(data.activeNow){
            case "h":
                fillHorizontal(index);
                break;
            case "v":
                fillVertical(index); 
        }
    }

    // ===============================
    // 填答與比對
    // ===============================
    function checkAnswer(){
        $('.col').removeClass('wrong');
        var answerLength = data.userAnswer.length;
        for(i=0; i<answerLength -1; i++){
            if(data.userAnswer[i] != null && data.userAnswer[i] != data.correctAnswer[i]){
                $('.col').eq(i).addClass('wrong');
            }
        }
        if(data.userAnswer.toString() == data.correctAnswer.toString()){
            console.log('全部答對');
            $('#hidden_msg').html(
                '<li><p>UP</p></li>'+
                '<li><p>UP</p></li>'+
                '<li><p>DOWN</p></li>'+
                '<li><p>DOWN</p></li>'+
                '<li><p>LEFT</p></li>'+
                '<li><p>RIGHT</p></li>'+
                '<li><p>LEFT</p></li>'+
                '<li><p>RIGHT</p></li>'+
                '<li><p>B</p></li>'+
                '<li><p>A</p></li>'+
                '<li><p>START</p></li>'
            );
        }else{
            console.log('尚未全部答對')
            $('#hidden_msg').html(
                '<li><p></p></li>' +
                '<li><p></p></li>' +
                '<li><p></p></li>' +
                '<li><p></p></li>' +
                '<li><p></p></li>' +
                '<li><p></p></li>' +
                '<li><p></p></li>' +
                '<li><p></p></li>' +
                '<li><p></p></li>' +
                '<li><p></p></li>' +
                '<li><p></p></li>'
            );
        }
    }

    function checkHorizontal(){
        var allLength = data.groupData.horizontal.length;
        for(i=0; i<allLength; i++){
            var r = data.groupData.horizontal[i].row;
            var c = data.groupData.horizontal[i].col;
            var l = data.groupData.horizontal[i].length;
            var nowAns = [];
            var groupCor = [];

            for(f=0; f<data.correctAnswer.length; f++){

                if(f%16 != 0){ var cc = f%16; }
                else{ var cc = 16; }
                var rr = Math.ceil(f/16);
        
                if(rr == r
                && cc >= c 
                && cc <= c + l - 1){
                    nowAns.push(data.userAnswer[f - 1]);
                    groupCor.push(data.correctAnswer[f - 1]);
                }
            }

            if(nowAns.toString() == groupCor.toString()){
                console.log('橫向第'+i+'題回答正確');
                $('#puzzle_qlist_across li.qn'+i+'').addClass('correct');
            }else{
                $('#puzzle_qlist_across li.qn'+i+'').removeClass('correct');
            }
        }
    }

    function checkVertical(){
        var allLength = data.groupData.vertical.length;
        for(i=0; i<allLength; i++){
            var r = data.groupData.vertical[i].row;
            var c = data.groupData.vertical[i].col;
            var l = data.groupData.vertical[i].length;
            var nowAns = [];
            var groupCor = [];

            for(f=0; f<data.correctAnswer.length; f++){

                if(f%16 != 0){ var cc = f%16; }
                else{ var cc = 16; }
                var rr = Math.ceil(f/16);
        
                if(cc == c
                && rr >= r 
                && rr <= r + l - 1){
                    nowAns.push(data.userAnswer[f - 1]);
                    groupCor.push(data.correctAnswer[f - 1]);
                }
            }
            if(nowAns.toString() == groupCor.toString()){
                console.log('直向第'+i+'題回答正確');
                $('#puzzle_qlist_down li.qn'+i).addClass('correct');
            }else{
                $('#puzzle_qlist_down li.qn'+i).removeClass('correct');
            }
        }
    }

    function registerAnswer(ans){
        if(data.ifVertical == null && data.ifHorizontal == null){
            console.log('不可輸入區塊');
        }else{
            if(ans != null){
                data.userAnswer.splice(data.userCurrent - 1 , 1, ans.toUpperCase());
                $('.col').eq(data.userCurrent - 1).find('p').text(ans);
            }else{
                data.userAnswer.splice(data.userCurrent - 1 , 1, ans);
                $('.col').eq(data.userCurrent - 1).find('p').text('');
            }
            checkHorizontal();
            checkVertical();
            checkAnswer();
        }
    }

    function goToNext(){
        if(data.activeNow == "h"){
            var r = data.groupData.horizontal[data.ifHorizontal].row;
            var c = data.groupData.horizontal[data.ifHorizontal].col;
            var l = data.groupData.horizontal[data.ifHorizontal].length;
            console.log( '比對橫向第'+data.ifHorizontal+'題',"col : " + c, "row : " + r, "length : " + l);
            console.log( '現在座標 col: '+data.userCurrentCol, 'row: '+data.userCurrentRow);

            if(data.userCurrentCol < c + l -1 || data.userCurrentRow != r){
                resetActiveAll()
                updateCurrent(data.userCurrent);
                updateHorizontal();
                updateVertical();
                fillHorizontal(data.userCurrent - 1); 
                console.log( '更新座標 col: '+data.userCurrentCol, 'row: '+data.userCurrentRow);
            }
        }
        else if(data.activeNow == "v"){
            var r = data.groupData.vertical[data.ifVertical].row;
            var c = data.groupData.vertical[data.ifVertical].col;
            var l = data.groupData.vertical[data.ifVertical].length;
            console.log( '比對直向第'+data.ifVertical+'題',"col : " + c, "row : " + r, "length : " + l);
            console.log( '現在座標 col: '+data.userCurrentCol, 'row: '+data.userCurrentRow);

            if(data.userCurrentRow < r + l - 1 || data.userCurrentCol != c){
                resetActiveAll()
                updateCurrent(data.userCurrent + 15);
                updateHorizontal();
                updateVertical();
                fillVertical(data.userCurrent - 1); 
                console.log( '更新座標 col: '+data.userCurrentCol, 'row: '+data.userCurrentRow);
            }
        }
    }

    function goToBack(){
        if(data.activeNow == "h"){
            var r = data.groupData.horizontal[data.ifHorizontal].row;
            var c = data.groupData.horizontal[data.ifHorizontal].col;
            var l = data.groupData.horizontal[data.ifHorizontal].length;
            console.log( '比對橫向第'+data.ifHorizontal+'題',"col : " + c, "row : " + r, "length : " + l);
            console.log( '現在座標 col: '+data.userCurrentCol, 'row: '+data.userCurrentRow);
            if(data.userCurrentCol > c || data.userCurrentRow != r){
                resetActiveAll()
                updateCurrent(data.userCurrent - 2);
                updateHorizontal();
                updateVertical();
                fillHorizontal(data.userCurrent - 1); 
                console.log( '更新座標 col: '+data.userCurrentCol, 'row: '+data.userCurrentRow);
            }
        }
        else if(data.activeNow == "v"){
            var r = data.groupData.vertical[data.ifVertical].row;
            var c = data.groupData.vertical[data.ifVertical].col;
            var l = data.groupData.vertical[data.ifVertical].length;
            console.log( '比對直向第'+data.ifVertical+'題',"col : " + c, "row : " + r, "length : " + l);
            console.log( '現在座標 col: '+data.userCurrentCol, 'row: '+data.userCurrentRow);
            if(data.userCurrentRow > r || data.userCurrentCol != c){
                resetActiveAll()
                updateCurrent(data.userCurrent - 17);
                updateHorizontal();
                updateVertical();
                fillVertical(data.userCurrent - 1); 
                console.log( '更新座標 col: '+data.userCurrentCol, 'row: '+data.userCurrentRow);
            }
        }
    }

// ===============================
// 監聽事件
// ===============================

    $('.col').on('click', function(){
        console.log('====點擊了某個區塊====');
        var index = $(this).index();

        // 更新觸發資料
        updateAll(index);
        // 更改畫面
        fillActive(index);
        // 開始作答
        answer.focus();
    });

    $('#answer').on('keydown', function(e){
        // 按下任何英文字母按鍵
        if(e.keyCode >= 65 && e.keyCode <= 90
        || e.keyCode >= 97 && e.keyCode <= 122
        || e.keyCode >= 48 && e.keyCode <= 57){
            console.log('====打了字====');
            console.log('使用者打了: '+ e.key, 'keycode是:'+e.keyCode);
            console.log(data.userAnswer)
            registerAnswer(e.key);
            goToNext();
        }
    });

    $('#answer').on('keydown', function(e){
        if(e.keyCode == 8){
            console.log('====按了回車====');
            registerAnswer(null);
            goToBack();
        }else if(e.keyCode == 39){
            var index = data.userCurrent;
            if(index%16 > 0 && index%16 < 16){
                console.log('====右移一格====');
                updateAll(index);
                fillActive(index);
                answer.focus();
            }
        }else if(e.keyCode == 37){
            var index = data.userCurrent - 2;
            if(index%16 >= 0 && index%16 < 15){
                console.log('====左移一格====');
                updateAll(index);
                fillActive(index);
                answer.focus();
            }
        }else if(e.keyCode == 38){
            var index = data.userCurrent - 17;
            if(index/16 >= 0 && index/16 < 15){
                console.log('====上移一格====');
                updateAll(index);
                fillActive(index);
                answer.focus();
            }
        }else if(e.keyCode == 40){
            var index = data.userCurrent + 15;
            if(index/16 > 0 && index/16 < 16){
                console.log('====下移一格====');
                updateAll(index);
                fillActive(index);
                answer.focus();
            }
        }
    });

    $('#puzzle_qlist_across li').on('click', function(){
        console.log('====按了題目====');
        var i = (data.groupData.horizontal[$(this).data('qn')].col - 1) + ((data.groupData.horizontal[$(this).data('qn')].row - 1)*16)
        clickOnList(i, 'fixed_Horizontal');
        fillActive(i);
        answer.focus();
    })

    $('#puzzle_qlist_down li').on('click', function(){
        console.log('====按了題目====');
        var i = (data.groupData.vertical[$(this).data('qn')].col - 1) + ((data.groupData.vertical[$(this).data('qn')].row - 1)*16)
        clickOnList(i, 'fixed_Vertical');
        fillActive(i);
        answer.focus();
    })


}

makeGameAll();
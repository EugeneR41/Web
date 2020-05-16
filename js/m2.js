        function randomInteger(min, max) {
                var rand = min - 0.5 + Math.random() * (max - min + 1)
                rand = Math.round(rand);
                return rand;
            }
            function getRandomInt(min,max) {
                return (min - 0.5 + Math.random()*(max - min));
            }
            function compareNumeric(a, b) {
                return b - a;
            }
            function GetResultArray(a){
                a.sort(compareNumeric);
                return(a)
            }

            function getResultMatrix(){
                var n = document.getElementById('n').value;
                a = GetArray();
                a = GetResultArray(a);
                var matrix = []
                for (i = 0; i < n; i++){
                    var arr = []
                    if (i % 2 == 0){
                        
						for (j = n-1; j > -1; j--){
                            arr.push(a[n*i+j]);
                        }
                    } else {
                        for (j = 0; j < n; j++){
                            arr.push(a[n*i+j]);
                        }
                    }
                    matrix.push(arr);
                }
				var body = document.getElementById('table');
                var tbl = document.createElement('table');
                var tbdy = document.createElement('tbody');
                for (var i = 0; i < n; i++) {
                    var tr = document.createElement('tr');
                    for (var j = 0; j < n; j++) {
                        var td = document.createElement('td');
                        td.appendChild(document.createTextNode(matrix[i][j]))
                        tr.appendChild(td)
                    }
                    tbdy.appendChild(tr);
                }
                tbl.appendChild(tbdy);
                body.appendChild(tbl)
                console.log(matrix);
            }

            function GetArray(){
                var max = document.getElementById('max').value;
                var min = document.getElementById('min').value;
                var n = document.getElementById('n').value;
                var arr = new Array();
                n = n*n;
                for (i = 0; i < n; i++) {
                        arr[i] = randomInteger(min, max);
                        }
                    
                return arr
                }
          	
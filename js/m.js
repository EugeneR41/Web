function trapec() {
    var a = document.forma1.t1.value;
    var b = document.forma1.t2.value;
    var h = document.forma1.t3.value;


    if ((a < 0) || (h < 0) || (b < 0)) {
        alert("alert");
    } else {
        if ((a == 0) || (h == 0) || (b == 0)) {
            alert("alert");
        } else {

            var result = (a * 1 + b * 1) / 2 * h;
            document.forma1.res.value = result;
        }

    }
}

function task2() {
    var x = document.forma2.t1.value;
    var result = 1;
    if (x >= 1) {
        alert("X > 1");
        document.forma2.res.value = '';
        exit;
    }
    if (isNaN(x)) {
        alert("NaN");
        document.forma2.res.value = '';
        exit;
    }
    var sum = 0;
    var n = 1;
    var k = 0;
    x = x * 1;
    while (true) {
        k = k + 1;
        sum = Math.pow(x, k) / n;
        if (Math.abs(sum.toFixed(10)) < 0.0003)
            break;
        result += sum;
        n = n * k;
    }
    document.forma2.res.value = result.toFixed(10);
}

            function task3() {
                var N = document.forma3.N.value;
				var M = (n*(n*n+1))/2;
				var sum = 0;
                var arr = new Array();
                for (i = 0; i < N; i++) {
                    arr[i] = new Array();
                    for (j = 0; j < N; j++) {
                        arr[i][j] = getRandomInt(1, 100);
                        sum += arr [i][j];
                    }
                }
                console.log(arr);
                for (i = 0; i < 7; i++) {
                    console.log(arr[i]);
                }
				if (M ==(sum/n)){
				document.forma3.Z.value = 'Yes';
				}
				else
				{
					document.forma3.Z.value = 'No';
				}
            }
			
		function getRandomInt(min, max) {
                var rand = Math.floor(Math.random() * (max - min)) + min;
                rand = Math.round(rand);
                return rand;
            }
			
		function GetArray(){
                var min = document.forma3.min.value;
                var max = document.forma3.max.value;
                var n = document.forma3.n.value;
                var arr = new Array();
                var i = 0;
                var j = 0;
                n = n*n;
                for (i = 0; i < n; i++) {
                        arr[i] = getRandomInt(min, max);
                        }
                    
                return arr
                }
			





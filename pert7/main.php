<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        // $nilai = 55;
        // $kehadiran = 90;

        // if ($nilai >= 70 && $kehadiran >=80) {
        //     # code...
        //     echo "Selamat, anda lulus";
        // }else {
        //     # code...
        //     echo "Mohon Maaf, kamu tidak lulus";
        // }

        // switch ($pilihan) {
        //     case 1:
        //         # code...
        //         echo "Anda memilih menu 1";
        //         break;
            
        //     case 2:
        //         # code...
        //         echo "Anda memilih menu 2";
        //         break;
            
        //     case 3:
        //         # code...
        //         echo "Anda memilih menu 3";
        //         break;
            
        //     case 4:
        //         # code...
        //         echo "Anda memilih menu 4";
        //         break;
            
        //     default:
        //         # code...
        //         echo "Menu yang anda pilih tidak tersedia";
        //         break;
        // }

        $umur = 16;
        if ($umur >= 18 ) {
            # code...
            echo "Kategori : Dewasa";
        }elseif ($umur >= 13 && $umur <= 17 ) {
            # code...
            echo "Kategori : Remaja";
        }else {
            # code...
            echo "Kategori : Anak Anak";
        }
    ?>
</body>
</html>
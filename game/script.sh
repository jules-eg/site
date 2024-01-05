#bin/bash
for ((a=0; a<10; a++))
    do mkdir $a
    for ((b=0; b<10; b++))
        do mkdir $a/$b
        for ((c=0; c<10; c++))
            do mkdir $a/$b/$c
            for ((d=0; d<10; d++))
                do mkdir $a/$b/$c/$d
                for ((e=0; e<10; e++))
                    do mkdir $a/$b/$c/$d/$e
                    for ((f=0; f<10; f++))
                        do mkdir $a/$b/$c/$d/$e/$f
                        for ((g=0; g<10; g++))
                            do mkdir $a/$b/$c/$d/$e/$f/$g
                            for ((h=0; h<10; h++))
                                do mkdir $a/$b/$c/$d/$e/$f/$g/$h
                                for ((i=0; i<10; i++))
                                    do mkdir $a/$b/$c/$d/$e/$f/$g/$h/$i
                                    for ((j=0; j<10; j++))
                                        do cp base $a/$b/$c/$d/$e/$f/$g/$h/$i/$j
                                        echo $a$b$c$d$e$f$g$h$i$j >> $a/$b/$c/$d/$e/$f/$g/$h/$i/$j
                                        echo $a$b$c$d$e$f$g$h$i$j
                                    done
                                done
                            done
                        done




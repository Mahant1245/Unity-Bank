arr=("file1.txt" "image1.png" "image2.jpg" "file3.pdf" "image3.docx" "file4.txt" "iamge4.jpg" "file.xyz" "image5.pdf" "file6.docx" "file7.csv")

for name in ${arr[@]}
do
    if [[ "$name" == *.txt ]]
    then
        echo "Moving $name to Text_Files folder"
    elif [[ "$name" == *.jpg ]] 
    then
        echo "Moving $name to Images folder"
    elif [[ "$name" == *.png ]]
    then
        echo "Moving $name to Images folder"
    elif [[ "$name" == *.pdf ]]
    then
        echo "Moving $name to PDF folder"
    elif [[ "$name" == *.docx ]]
    then
        echo "Moving $name to Word folder"
    elif [[ "$name" == *.csv ]]
    then
        echo "Moving $name to CSV folder"
    elses
        echo "not found"
    fi
done


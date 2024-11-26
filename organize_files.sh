arr=("file1.txt" "image1.png" "image2.jpg" "file3.txt" "image3.jpg" "file4.txt" "iamge4.jpg" "file.xyz" "image5.png")

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
    else
        echo "not found"
    fi
done


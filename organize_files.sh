arr=("file1.txt" "file2.txt" "image1.jpg" "file3.txt" "image2.jpg" "file4.txt" "iamge3.jpg" "file without extension")

for name in ${arr[@]}
do
    if [[ "$name" == *.txt ]]
    then
        echo "Moving $name to Text_Files folder"
    elif [[ "$name" == *.jpg ]] 
    then
        echo "Moving $name to Images folder"
    else
        echo "not found"
    fi
done


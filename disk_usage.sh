d=100
echo "curent disc usage $d"
# threshold is 80
if [ "$d" -gt 80 ]
then
    echo "**Warning!** your disc usage is higher than threshold(8O)"
else
    echo "you have disc usage below the threshold value keep going!!"
fi
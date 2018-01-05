import random
list1 = []\
#append 10 random numbers into the list.
for i in range(10):
    list1.append(random.randint(1, 10))
#print the starting list.
for i in reversed(range(len(list1))):
    print(i, ": ", list1[i])
for i in range(len(list1)):
    #set a temporary variable to go through each number in the list, starting on the one in pos i, then going down.
    tmp_var = i
    #do a while loop to run through each previous number, and it stops when either tmp_var becomes 0, or if the current number becomes less than the one before it
    while tmp_var > 0 and list1[tmp_var]> list1[tmp_var-1]:
        #swap numbers
        list1[tmp_var], list1[tmp_var-1] = list1[tmp_var-1], list1[tmp_var]
        #move one down the list
        tmp_var -= 1
        print(list1)
print(list1[::-1])

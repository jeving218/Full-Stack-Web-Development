def r_s(s):
    rs=""
    for i in s:
        rs= i+rs
    return rs

j = "gnivej"
k=j[::-1]
print(k)
print("using for loop",r_s(j))

list = [1,3,22,3,4,55,4,12,56]
print(sorted(list))

list.sort()
print(list)

for i in range(len(list)):
    for  j in range(i+1,len(list)):
        if i>j:
            list[i],list[j]= list[j],list[i]
print(list)
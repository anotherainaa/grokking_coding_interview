def twoSum(numbers, target):
    hashMap = {}
    
    for index in range(len(numbers)):
        number = numbers[index]
        
        diff = target - numbers[index]
        if (diff in hashMap):
            return [hashMap[diff], index]

        hashMap[number] = index
        
    return [-1, -1]

print(twoSum([3, 2, 4], 6))
def containsDuplicate(nums):
    seen = {}
    for i in nums:

        if seen.get(i) != None:
            return True

        seen[i] = True

    return False


print(containsDuplicate([1, 2, 3, 4]))
print(containsDuplicate([1, 2, 3, 2]))

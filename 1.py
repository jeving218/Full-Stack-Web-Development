# # list_1=[1,2,3,4,5,6]
# # # convert list to string

# # result = map(str,list_1)
# # print(list(result))
# # print(list(map(str,list_1)))
# # def covertListToString(list_1):
# #     result = map(str,list_1)
# #     return list(result)

# # print(covertListToString(list_1))


# l = ['aa', 'aaaabbc', 'aaaaabbc', 'aaabbbc']
# c = sorted(l,key= len)
# print(l)
# ### output = ['aa', 'aaabbbc', 'aaaabbc', 'aaaabbc']


# # str = 'aaaddeeeeffgg'
# # def  countValue(str):
# #     word_count = []
# #     for alp in range(len(str)):
# #         for ltr in str[alp]:
# #             if ltr[0] == '':
# #                 word_count.append(None)
# #             else:
# #                 word_count.append(ltr[0])
# #     final_dict = {x: word_count.count(x) for x in word_count}
# #     return final_dict
# # print(countValue(str))


# def min_time_to_change(initialState, finalState, writer):
#     # Check if initialState is already equal to finalState
#     if initialState == finalState:
#         return 0

#     # Check if the writer is empty (no writing heads)
#     if writer.count('1') == 0:
#         return -1

#     n = len(initialState)  # Length of the CD

#     # Find the indices of the writing heads
#     writing_heads = [i for i, bit in enumerate(writer) if bit == '1']

#     min_time = float('inf')  # Initialize the minimum time to infinity

#     # Try all possible rotations
#     for rotate in range(n):
#         time = rotate * 2  # Time taken for rotation

#         # Apply changes using each writing head
#         for head in writing_heads:
# #             # Calculate the new state after applying the head
# #             new_state = initialState[:head] + str(1 - int(initialState[head])) + initialState[head + 1:]

# #             # Check if the new state matches the final state
# #             if new_state == finalState:
# #                 min_time = min(min_time, time + 3)  # Update the minimum time

# #         initialState = initialState[-1] + initialState[:-1]  # Rotate the CD

# #     if min_time == float('inf'):
# #         return -1  # If no valid sequence of operations found
# #     else:
# #         return min_time

# # # Read the input
# # initialState = input().strip()
# # finalState = input().strip()
# # writer = input().strip()

# # # Call the function to find the minimum time
# # result = min_time_to_change(initialState, finalState, writer)

# # # Print the result
# # print(result)


# def min_time_to_change(initialState, finalState, writer):
#     # Check if initialState is already equal to finalState
#     if initialState == finalState:
#         return 0

#     # Check if the writer is empty (no writing heads)
#     if writer.count('1') == 0:
#         return -1

#     n = len(initialState)  # Length of the CD

#     # Find the indices of the writing heads
#     writing_heads = [i for i, bit in enumerate(writer) if bit == '1']

#     min_time = float('inf')  # Initialize the minimum time to infinity

#     # Try all possible rotations
#     for rotate in range(n):
#         time = rotate * 2  # Time taken for rotation

#         # Apply changes using each writing head
#         for head in writing_heads:
#             # Calculate the new state after applying the head
#             new_state = initialState[:head] + str(1 - int(initialState[head])) + initialState[head + 1:]

#             # Check if the new state matches the final state
#             if new_state == finalState:
#                 min_time = min(min_time, time + 3)  # Update the minimum time

#         initialState = initialState[-1] + initialState[:-1]  # Rotate the CD

#     if min_time == float('inf'):
#         return -1  # If no valid sequence of operations found
#     else:
#         return min_time

# # Read the input
# initialState = input().strip()
# finalState = input().strip()
# writer = input().strip()

# # Call the function to find the minimum time
# result = min_time_to_change(initialState, finalState, writer)

# # Print the result
# print(result)

def min_time_to_change(initialState, finalState, writer):
    # Check if initialState is already equal to finalState
    if initialState == finalState:
        return 0

    # Check if the writer is empty (no writing heads)
    if writer.count('1') == 0:
        return -1

    n = len(initialState)  # Length of the CD

    # Find the indices of the writing heads
    writing_heads = [i for i, bit in enumerate(writer) if bit == '1']

    min_time = float('inf')  # Initialize the minimum time to infinity

    # Try all possible rotations
    for rotate in range(n):
        time = rotate * 2  # Time taken for rotation

        # Apply changes using each writing head
        for head in writing_heads:
            # Calculate the new state after applying the head
            new_state = initialState[:head] + str(1 - int(initialState[head])) + initialState[head + 1:]

            # Check if the new state matches the final state
            if new_state == finalState:
                min_time = min(min_time, time + 3)  # Update the minimum time

        initialState = initialState[-1] + initialState[:-1]  # Rotate the CD

        # Check if the rotated initialState matches the final state
        if initialState == finalState:
            min_time = min(min_time, time + 2)  # Update the minimum time

    if min_time == float('inf'):
        return -1  # If no valid sequence of operations found
    else:
        return min_time

# Read the input
initialState = input().strip()
finalState = input().strip()
writer = input().strip()

# Call the function to find the minimum time
result = min_time_to_change(initialState, finalState, writer)

# Print the result
print(result)

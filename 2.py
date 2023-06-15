def find_minimum_time(initialState, finalState, writer):
    if initialState == finalState:
        return 0

    if not '1' in writer:
        return -1

    n = len(initialState)
    time = float('inf')

    for i in range(n):
        if writer[i] == '1':
            temp = initialState[i:] + initialState[:i]  # Rotate CD
            count = 0

            for j in range(n):
                if temp[j] != finalState[j]:
                    count += 1  # Change bit under writing head

            time = min(time, count)

    if time == float('inf'):
        return -1

    return time * 3 + 2  # Rotate CD by 1 step takes 2 seconds


# # # # Read the input
# # # initialState = input()
# # # finalState = input()
# # # writer = input()

# # # # Find the minimum time
# # # minimum_time = find_minimum_time(initialState, finalState, writer)

# # # # Print the result
# # # print(minimum_time)



# # # # 0101010010101   
# # # # 0101001010101 
# # # # 1010101010010  


# # def min_steps_to_equalize_array(A):
# #     n = len(A)
# #     steps = float('inf')

# #     for target in set(A):
# #         cur_steps = 0

# #         for i in range(n):
# #             clockwise_steps = abs(A[i] - target)
# #             counterclockwise_steps = n - clockwise_steps

# #             cur_steps += min(clockwise_steps, counterclockwise_steps)

# #         steps = min(steps, cur_steps)

# #     return steps


# # # Read the input
# # n = int(input())
# # A = []
# # for _ in range(n):
# #     A.append(int(input()))

# # # Calculate the minimum steps
# # min_steps = min_steps_to_equalize_array(A)

# # # Print the result
# # print(min_steps)

# def min_steps_to_equalize_array(A):
#     n = len(A)
#     min_steps = float('inf')

#     # Check if all elements are already equal
#     if all(x == A[0] for x in A):
#         return 0

#     for i in range(n):
#         steps = 0
#         target = A[i]

#         for j in range(n):
#             diff = (A[j] - target) % n
#             steps += min(diff, n - diff)

#         min_steps = min(min_steps, steps)

#     if min_steps == float('inf'):
#         return -1
#     else:
#         return min_steps


# # Read the input
# n = int(input())
# A = []
# for _ in range(n):
#     A.append(int(input()))

# # Calculate the minimum steps
# min_steps = min_steps_to_equalize_array(A)

# # Print the result
# print(min_steps)



def get_min_time(initialState, finalState, writer):
    if initialState == finalState:
        return 0

    head_positions = [i for i, c in enumerate(writer) if c == '1']
    min_time = float('inf')

    for rotation in range(len(initialState)):
        time = rotation * 2
        current_state = initialState[rotation:] + initialState[:rotation]

        for i in range(len(finalState)):
            if current_state[i] != finalState[i]:
                if i in head_positions:
                    time += 3
                else:
                    time = float('inf')
                    break

        min_time = min(min_time, time)

    return min_time if min_time != float('inf') else -1


# Read the input strings
initialState = input("Enter initial state: ").strip()
finalState = input("Enter final state: ").strip()
writer = input("Enter writer: ").strip()

# Calculate the minimum time
min_time = get_min_time(initialState, finalState, writer)

# Print the result
print("Minimum time:", min_time)

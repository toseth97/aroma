import random

def generate_question():
    """Generates two random numbers between 1 and 10 and returns them as a tuple."""
    num1 = random.randint(1, 10)
    num2 = random.randint(1, 10)
    return num1, num2

def get_user_answer():
    """Prompts the user for their answer and validates it as an integer."""
    while True:
        try:
            answer = int(input("What is the sum of these numbers? "))
            return answer
        except ValueError:
            print("Please enter a valid number.")

def check_answer(num1, num2, answer):
    """Compares the user's answer with the correct sum and returns True/False."""
    correct_sum = num1 + num2
    return answer == correct_sum

def main():
    """Runs the game for 10 rounds and displays the final score."""
    num_rounds = 10
    score = 0

    for i in range(1, num_rounds + 1):
        num1, num2 = generate_question()
        print(f"\nRound {i}: {num1} + {num2} = ?")

        answer = get_user_answer()

        if check_answer(num1, num2, answer):
            print("Correct!")
            score += 1
        else:
            print(f"Incorrect. The correct answer is {num1 + num2}.")

    print(f"\nYour final score is {score} out of {num_rounds}.")

    if score >= 7:
        print("Congrats, you are an excellent player!")
    elif score >= 4:
        print("You have tried, please try harder next time.")
    else:
        print("Sorry, you need to buck up next time!")

if __name__ == "__main__":
    main()

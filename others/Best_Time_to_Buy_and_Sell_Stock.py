def maxProfit(prices):
    max_profit = 0

    left = 0
    for right in range(1, len(prices)):
        if prices[right] < prices[left]:
            left = right
        max_profit = max(max_profit, prices[right] - prices[left])
    return max_profit
def parse_minutes(text):
    minutes = []
    for word in text.split():
        minutes.append(int(word))
    return minutes

def summarize(minutes, goal):
    total = 0
    reached_count = 0
    for duration in minutes:
        total += duration
        if duration >= goal:
            reached_count += 1
    latest = minutes[-1] if minutes else None
    return total, latest, reached_count

def to_hours(total_minutes):
    return total_minutes // 60, total_minutes % 60

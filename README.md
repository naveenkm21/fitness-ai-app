# AI-Powered Exercise Detection App

## Overview
This AI-powered exercise detection app uses TensorFlow.js and the MoveNet model to track body movements and count exercise repetitions in real time. It provides real-time feedback on form quality, rep counting, and XP-based gamification to encourage consistent workouts.

## Features
- **Exercise Detection**: Detects and counts Squats, Push-ups, Bicep Curls, and more.
- **Real-time Pose Tracking**: Uses MoveNet for accurate keypoint detection.
- **Form Analysis**: Provides feedback on exercise form and posture.
- **AI-Powered Feedback**: Detects incorrect posture and suggests improvements.
- **XP and Level System**: Earn XP for every rep and level up with progress.
- **Achievements**: Unlock achievements for reaching milestones.
- **Leaderboard**: Track user progress with an in-app leaderboard.
- **User Progress Saving**: Stores user XP, level, and exercise history.
- **Enhanced UI**: Updated with a more interactive and responsive design.

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript
- **AI Model**: TensorFlow.js, MoveNet Pose Detection
- **Gamification**: XP system, level tracking, achievement notifications
- **Backend (Upcoming Feature)**: Plan to integrate Firebase for cloud-based storage.

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/naveenkm21/fitness-ai-app.git
   cd fitness-ai-app
   ```
2. Open `public/exercise-detection-updated.html` in a browser.
3. Allow camera access when prompted.
4. Select an exercise type and start detecting!

## Usage
1. Click **"Start Camera"** to enable webcam tracking.
2. Choose an exercise from the dropdown menu.
3. Click **"Detect Exercise"** to begin tracking movements.
4. Perform reps and get real-time feedback.
5. Track XP, achievements, and leaderboard rankings.
6. Click **"Save & Exit"** to store progress.

## Supported Exercises
- **Squats**: Tracks knee bend angle for squat detection.
- **Push-ups**: Detects elbow angle and body alignment.
- **Bicep Curls**: Monitors elbow movement for rep counting.
- **Planks (Upcoming Feature)**: Detects core stability and posture.
- **Jumping Jacks (Upcoming Feature)**: Counts repetitions accurately.

## How It Works
1. **Pose Detection**: MoveNet identifies keypoints (shoulders, elbows, knees, etc.).
2. **Angle Calculation**: The app calculates joint angles to determine exercise state.
3. **Repetition Counting**: A transition between states (e.g., standing to squat) counts as a rep.
4. **Feedback System**: Displays correct/incorrect form messages and posture warnings.
5. **XP & Achievements**: XP is awarded based on repetitions and form quality.

## Future Improvements
- **More Exercises**: Add support for additional workout types.
- **Voice Feedback**: Audio cues for real-time coaching.
- **Mobile Optimization**: Improve UI for mobile usage.
- **Cloud Storage**: Store progress online using Firebase.
- **AI-Powered Custom Workouts**: Generate personalized workout plans based on performance.

## License
This project is open-source and available under the MIT License.

## Contributing
Feel free to submit issues or pull requests to enhance the app!


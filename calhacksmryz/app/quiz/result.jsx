import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

export default function QuizResult({ score, totalQuestions, questions, userAnswers }) {
  return (
    <Card className='bg-zinc-50' sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      width: { xs: '90%', sm: '85%', md: '80%', lg: '75%' },
      height: 'auto',
      borderRadius: 3, 
      boxShadow: 3,
      p: 3
    }}>
      <CardContent sx={{ 
        flex: '1 0 auto', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        textAlign: 'center',
      }}>
        <Typography variant="h4" sx={{ mb: 2, fontWeight:"bold"}}>
          Your Score: {score}/{totalQuestions}
        </Typography>

        {questions.map((question, index) => (
            <Box
                key={index}
                sx={{
                    p: 2, // Adds padding inside each question block
                    mb: 3, // Adds margin below each block to separate from the next
                    border: '1px solid #e0e0e0', // Light border around each question block
                    borderRadius: '8px', // Optional: adds rounded corners
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    backgroundColor: 'background.paper',
                    width: '80%',
                }}
            >
                <Typography variant="h6" sx={{ mt: 1, fontWeight: 'medium' }}>
                Q{index + 1}: {question.question}
                </Typography>
                <Typography variant="subtitle1">
                Correct Answer: {question.choices.find(choice => choice.correct).text}
                </Typography>
                <Typography variant="subtitle1" color="primary">
                Your Answer: {userAnswers[index]}
                </Typography>
            </Box>
        ))}

        <Button className='bg-zinc-700 text-white' variant="contained" href="/" sx={{ mt: 4 }}>
          Home
        </Button>
      </CardContent>
    </Card>
  );
}

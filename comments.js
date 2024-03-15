// Create web server

const app = express();
const port = 3000;

// Create comments array
const comments = [
  {
    username: 'Tammy',
    comment: 'lololol'
  },
  {
    username: 'FishBoi',
    comment: 'Nice :)'
  },
  {
    username: 'Hapless',
    comment: 'I am so happy'
  }
];

// Setup static files
app.use(express.static('public'));

// Setup comments route
app.get('/comments', (req, res) => {
  res.status(200).json(comments);
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
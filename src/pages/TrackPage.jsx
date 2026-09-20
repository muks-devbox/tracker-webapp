import { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useProgress } from '../hooks/useProgress';
import StatCards from '../components/track/StatCards';
import FilterTabs from '../components/track/FilterTabs';
import TopicCard from '../components/track/TopicCard';
import roadmap from '../data/roadmap';

export default function TrackPage() {
  const { trackId } = useParams();
  const { getTrackStats, getTopicStats, getSparklineSeries } = useProgress();
  const [filter, setFilter] = useState('All');

  const track = roadmap.tracks.find(t => t.trackId === trackId);
  if (!track) return <Navigate to={`/track/${roadmap.tracks[0].trackId}`} replace />;

  const stats = getTrackStats(track);
  const sparkline = getSparklineSeries(6);

  const filteredTopics = track.topics.filter(topic => {
    if (filter === 'All') return true;
    const s = getTopicStats(topic.topicId, topic.subtasks);
    if (filter === 'Core') return topic.tiers.includes('Core');
    if (filter === 'Needs revision') return s.shaky > 0;
    if (filter === 'Not started') return s.solidPlus === 0 && s.shaky === 0;
    return true;
  });

  return (
    // key={trackId} forces a clean remount on every track switch, so the
    // page-enter animation replays each time instead of only on first load.
    <div key={trackId} className="max-w-2xl mx-auto animate-page-enter">
      <div className="mb-1 text-[10px] font-semibold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
        {track.category}
      </div>
      <h1 className="text-2xl font-bold mb-1.5" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-1)' }}>
        {track.title}
      </h1>
      <p className="text-sm mb-5" style={{ color: 'var(--text-3)' }}>{track.description}</p>

      <StatCards stats={stats} sparkline={sparkline} />
      <FilterTabs active={filter} onChange={setFilter} />

      {filteredTopics.length === 0 ? (
        <div className="text-sm text-center py-10 animate-pop" style={{ color: 'var(--text-4)' }}>
          Nothing matches this filter.
        </div>
      ) : (
        filteredTopics.map((topic, i) => <TopicCard key={topic.topicId} topic={topic} index={i} />)
      )}
    </div>
  );
}

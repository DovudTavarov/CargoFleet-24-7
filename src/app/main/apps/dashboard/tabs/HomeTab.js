import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { selectWidgets } from '../store/widgetsSlice';
import Widget1 from '../widgets/Widget1';
import Widget2 from '../widgets/Widget2';
import Widget3 from '../widgets/Widget3';
import Widget4 from '../widgets/Widget4';
import Widget5 from '../widgets/Widget5';
import Widget8 from '../widgets/Widget8';
import Widget12 from '../widgets/Widget12';
import { selectProjects } from '../store/projectsSlice';

function HomeTab() {
  const widgets = useSelector(selectWidgets);

  const dashboardData = useSelector(selectProjects);

  const container = {
    show: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div className="flex flex-wrap" variants={container} initial="hidden" animate="show">
      <motion.div variants={item} className="widget flex w-full sm:w-1/2 md:w-1/4 p-12">
        <Widget1 widget={widgets.widget1} />
      </motion.div>
      <motion.div variants={item} className="widget flex w-full sm:w-1/2 md:w-1/4 p-12">
        <Widget2 widget={widgets.widget2} />
      </motion.div>
      <motion.div variants={item} className="widget flex w-full sm:w-1/2 md:w-1/4 p-12">
        <Widget3 widget={widgets.widget3} />
      </motion.div>
      <motion.div variants={item} className="widget flex w-full sm:w-1/2 md:w-1/4 p-12">
        <Widget4 widget={widgets.widget4} />
      </motion.div>
      <motion.div variants={item} className="widget flex w-full  p-12">
        <Widget5 widget={widgets.widget5} />
      </motion.div>
      <motion.div variants={item} className="widget flex w-full p-12">
        <Widget8 widget={widgets.widget8} />
      </motion.div>
      {/* <motion.div variants={item} className="widget flex w-full p-12">
        <Widget12 widget={widgets.widget12} />
      </motion.div> */}
    </motion.div>
  );
}

export default HomeTab;

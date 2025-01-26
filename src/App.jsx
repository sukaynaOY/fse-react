import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Tabs from './components/Tab';
import MedicalTable from './components/MedicalTable';
import AnalyseTable from './components/AnalyseTable';
import CliniqueTable from './components/CliniqueTable';
import Pagination from './components/Pagination';

const App = () => {
  const [activeTab, setActiveTab] = useState('medical');
  const [medicalData, setMedicalData] = useState([]);
  const [analyseData, setAnalyseData] = useState([]);
  const [cliniqueData, setCliniqueData] = useState([]);
  const [medicalPage, setMedicalPage] = useState(0);
  const [analysePage, setAnalysePage] = useState(0);
  const [cliniquePage, setCliniquePage] = useState(0);
  const [medicalTotalCount, setMedicalTotalCount] = useState(0);
  const [analyseTotalCount, setAnalyseTotalCount] = useState(0);
  const [cliniqueTotalCount, setCliniqueTotalCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch paginated data
  useEffect(() => {
    fetchData();
  }, [medicalPage, analysePage, cliniquePage, searchQuery]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:8081/api/data/fetch?medicalPage=${medicalPage}&medicalSize=7&analysePage=${analysePage}&analyseSize=7&cliniquePage=${cliniquePage}&cliniqueSize=7&searchQuery=${searchQuery}`
      );
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setMedicalData(data.medicalList || []);
      setAnalyseData(data.analyseList || []);
      setCliniqueData(data.cliniqueList || []);
      setMedicalTotalCount(data.medicalTotalCount || 0);
      setAnalyseTotalCount(data.analyseTotalCount || 0);
      setCliniqueTotalCount(data.cliniqueTotalCount || 0);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Reset pagination on search
  useEffect(() => {
    if (activeTab === 'medical') {
      setMedicalPage(0);
    } else if (activeTab === 'analyse') {
      setAnalysePage(0);
    } else if (activeTab === 'clinique') {
      setCliniquePage(0);
    }
  }, [searchQuery]);

  // Handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setSearchQuery('');
    if (tab === 'medical') {
      setMedicalPage(0);
    } else if (tab === 'analyse') {
      setAnalysePage(0);
    } else if (tab === 'clinique') {
      setCliniquePage(0);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Tabs activeTab={activeTab} handleTabClick={handleTabClick} />
      {activeTab === 'medical' && (
        <>
          <MedicalTable data={medicalData} searchQuery={searchQuery} />
          <Pagination
            totalItems={medicalTotalCount}
            pageSize={7}
            currentPage={medicalPage}
            setPage={setMedicalPage}
          />
        </>
      )}
      {activeTab === 'analyse' && (
        <>
          <AnalyseTable data={analyseData} searchQuery={searchQuery} />
          <Pagination
            totalItems={analyseTotalCount}
            pageSize={7}
            currentPage={analysePage}
            setPage={setAnalysePage}
          />
        </>
      )}
      {activeTab === 'clinique' && (
        <>
          <CliniqueTable data={cliniqueData} searchQuery={searchQuery} />
          <Pagination
            totalItems={cliniqueTotalCount}
            pageSize={7}
            currentPage={cliniquePage}
            setPage={setCliniquePage}
          />
        </>
      )}
    </div>
  );
};

export default App;